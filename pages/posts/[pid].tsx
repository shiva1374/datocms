/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../src/components/layout'
import Header from '../../src/components/header'
import Footer from '../../src/components/footer'
import { getAllPostIds, getPost, post } from '../../src/lib/posts'
import { main, text } from '../../src/components/styles/styles'

const title = css`
  line-height: 1.25;
  font-size: 2em;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #131415;
  text-align: center;
`

export default function Post(props: { postData: post }) {
  const { postData } = props
  return (
    <Layout>
      <Header />
      <main css={main}>
        <article>
          <h1 css={title}>{postData.title}</h1>
          <div>
            <p css={text}>{postData.body}</p>
          </div>
        </article>
      </main>
      <Footer />
    </Layout>
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
