/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useTheme } from 'emotion-theming'
import Page from 'components/page'
import Footer from 'components/footer'
import { Post, Theme } from 'lib/types'
import { main, text } from 'styles'
import { getAllPosts, getPost } from 'lib/datocms'

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

const PostPage: React.FC<{ post: Post }> = ({ post }) => {
  const theme = useTheme<Theme>()
  const { author } = post
  return (
    <Page>
      <main css={main}>
        <article>
          <h1 css={title}>{post.title}</h1>
          <div css={text} dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts()
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`),
    fallback: true,
  }
}

export default PostPage
