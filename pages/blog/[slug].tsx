/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import Footer from 'components/footer'
import { ALL_POSTS_QUERY } from '../blog'
import { Post as PostType } from 'lib/types'
import { main, text } from 'components/styles/styles'
import { request } from 'lib/datocms'
import markdownToHtml from 'lib/markDownToHtml'

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

export const POST_QUERY = `
query POST_QUERY($slug: String!){
  post(filter: { slug: { eq: $slug } }) {
    author {
      name
    }
    content
    date
  }
}
`

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await request({
    query: POST_QUERY,
    variables: { slug: params.slug },
  })
  const content = await markdownToHtml(data?.post?.content || '')
  return {
    props: {
      post: {
        ...data?.post,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({
    query: ALL_POSTS_QUERY,
    variables: { limit: 10 },
  })
  return {
    paths: data.allPosts?.map((post) => `/blog/${post.slug}`),
    fallback: true,
  }
}

const Post: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <>
      <main css={main}>
        <article>
          <h1 css={title}>{post.title}</h1>
          <div>
            <p css={text}>{post.content}</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Post
