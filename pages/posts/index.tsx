/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import Footer from '../../src/components/footer'
import Date from '../../src/components/date'
import { main, text } from '../../src/components/styles/styles'
import { Post } from '../../src/lib/types'

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
  &:hover {
    cursor: pointer;
    color: #f628a0;
  }
`

const Blog: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const renderPosts = () =>
    posts.map(({ id, title, body }) => (
      <li css={listElement} key={id.toString()}>
        <Link href='/posts/[pid]' as={`/posts/${id}`}>
          <a css={titleStyled}>
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
    <>
      <main css={main}>
        <section>
          <ul css={list}>{renderPosts()}</ul>
        </section>
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()
  return { props: { posts } }
}

export default Blog
