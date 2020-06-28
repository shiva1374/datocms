/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import Footer from 'components/footer'
import { getAllPostIds, getPost } from 'lib/posts'
import { Post as PostType } from 'lib/types'
import { main, text } from 'components/styles/styles'

const title = css`
  line-height: 1.25;
  font-size: 2em;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`

const Post: React.FC<{ postData: PostType }> = (props) => {
  const { postData } = props
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

export default Post
