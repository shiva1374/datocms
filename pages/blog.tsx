/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useTheme } from 'emotion-theming'
import Page from 'src/components/page'
import Footer from 'src/components/footer'
import Date from 'src/components/date'
import { main, text } from 'src/styles'
import { Post, Theme } from 'src/lib/types'
import { getAllPosts } from 'src/lib/datocms'

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

const Blog: React.FC<{ allPosts: Post[] }> = ({ allPosts }) => {
  const theme = useTheme<Theme>()
  return (
    <Page>
      <main css={main}>
        <section>
          <ul css={list}>
            {allPosts?.map(({ title, excerpt, date, slug }) => (
              <li css={listElement} key={slug}>
                <Link href='/posts/[slug]' as={`/posts/${slug}`}>
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
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts,
    },
  }
}

export default Blog
