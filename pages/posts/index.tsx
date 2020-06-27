/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'
import Layout from '../../src/components/layout'
import Header from '../../src/components/header'
import Footer from '../../src/components/footer'
import Date from '../../src/components/date'
import { main, text } from '../../src/components/styles/styles'
import { useTheme } from 'emotion-theming'
import { theme } from '../../src/lib/theme'

const list = css`
  list-style: none;
  padding: 0;
  margin: 0;
`

const listElement = css`
  margin: 0 0 4rem;
`

const titleStyled = css`
  line-height: 1.25;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #131415;
  &:hover {
    cursor: pointer;
    color: #f628a0;
  }
`

export default function Blog({ posts }) {
  const theme = useTheme<theme>()
  const renderPosts = () =>
    posts.map(({ id, title, body }) => (
      <li css={listElement} key={id.toString()}>
        <Link href='/posts/[pid]' as={`/posts/${id}`}>
          <a
            css={css`
              ${titleStyled};
              color: ${theme.body};
            `}
          >
            <h2>{title}</h2>
          </a>
        </Link>
        <p css={text}>{body}</p>
        <small>
          <Date dateString={'2020-01-01'} />
        </small>
      </li>
    ))

  return (
    <Layout>
      <Header />
      <main css={main}>
        <section>
          <ul css={list}>{renderPosts()}</ul>
        </section>
      </main>
      <Footer />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { props: { posts } }
}
