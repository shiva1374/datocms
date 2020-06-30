/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { FaGift } from 'react-icons/fa'
import Page from 'src/components/page'
import Footer from 'src/components/footer'
import { Author } from 'src/lib/types'
import { text, main, iconGift } from 'src/styles'
import { getAuthor } from 'src/lib/datocms'

const list = css`
  ${text};
  padding: 0 1rem 2rem;
`

const link = css`
  ${text};
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

const containerGift = css`
  text-align: center;
  margin-top: 4rem;
`

const Home: React.FC<{ author: Author }> = ({ author }) => {
  return (
    <Page>
      <main css={main}>
        <section>
          <h2 css={text}>Hey ✌️</h2>
          <p css={text}>
            My name is <strong>{author.name}</strong>, {author.description}
          </p>
          <h3>Another cool things that I enjoy</h3>
          <ul css={list}>
            {author?.hobbies?.values?.map((hobby) => (
              <li key={hobby}>
                <span>{hobby}</span>
              </li>
            ))}
          </ul>
          <p css={text}>
            This site has it a part of the blog with all my thoughts, and my
            articles of software
          </p>
          <p css={text}>
            If you wanna talk about your{' '}
            <i>
              <small>(open/closed)</small>
            </i>{' '}
            projects or business, you can{' '}
            <Link href='/contact'>
              <a css={link}>
                <span>contact me!</span>
              </a>
            </Link>
          </p>
        </section>
      </main>
      <section css={containerGift}>
        <Link href='/source-code'>
          <a css={link}>
            <FaGift css={iconGift} />
          </a>
        </Link>
      </section>
      <Footer />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const author = await getAuthor()
  return {
    props: {
      author,
    },
  }
}

export default Home
