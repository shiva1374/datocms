/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Footer from 'components/footer'
import Date from 'components/date'
import { main, text } from 'components/styles/styles'
import { Post } from 'lib/types'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import { request } from 'lib/datocms'

const list = css`
  list-style: none;
  padding: 0;
  margin: 0;
`

const listElement = css`
  margin: 0 0 4rem;
`

const titleElement = (theme: Theme) => css`
  line-height: 1.25;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${theme.primary};
  }
`

export const ALL_POSTS_QUERY = `
  query ALL_POSTS_QUERY($limit: IntType!) {
    allPosts(first: $limit) {
      id
      title
      excerpt
      date
      slug
      coverImage {
        responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
`

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await request({
    query: ALL_POSTS_QUERY,
    variables: { limit: 10 },
    preview: context.preview,
  })
  return {
    props: {
      allPosts: data.allPosts,
    },
  }
}

const Blog: React.FC<{ allPosts: Post[] }> = ({ allPosts }) => {
  const theme = useTheme<Theme>()
  return (
    <>
      <main css={main}>
        <section>
          <ul css={list}>
            {allPosts?.map(({ title, excerpt, date, slug }) => (
              <li css={listElement} key={slug}>
                <Link href='/blog/[slug]' as={`/blog/${slug}`}>
                  <a css={titleElement(theme)}>
                    <h2>{title}</h2>
                  </a>
                </Link>
                <p css={text}>{excerpt}</p>
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Blog
