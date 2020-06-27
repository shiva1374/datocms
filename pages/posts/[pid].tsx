/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import Footer from '../../src/components/footer'
import { getAllPostIds, getPost, post } from '../../src/lib/posts'
import { main, text } from '../../src/components/styles/styles'
import { useTheme } from 'emotion-theming'
import { Theme } from '../../src/lib/theme'

const title = css`
  line-height: 1.25;
  font-size: 2em;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
`

export default function Post(props: { postData: post }) {
  const { postData } = props
  const theme = useTheme<Theme>()

  return (
    <>
      <main css={main}>
        <article>
          <h1 css={title}>{postData.title}</h1>
          <div>
            <p css={text}>{postData.body}</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pid = params.pid
  const postData = await getPost(pid.toString())
  return {
    props: {
      postData,
    },
  }
}
