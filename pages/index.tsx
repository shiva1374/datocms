/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import Footer from '../src/components/footer'
import config from '../src/lib/config'
import { text, main } from '../src/components/styles/styles'

const list = css`
  ${text};
  padding: 0 1rem 2rem;
  & > li > span {
    color: #f628a0;
  }
`

const link = css`
  ${text};
  color: #f628a0;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

const Home: React.FC = () => {
  return (
    <>
      <main css={main}>
        <section>
          <h2 css={text}>Hey ✌️</h2>
          <p css={text}>
            My name is <strong>{config.author}</strong>, {config.description}
          </p>
          <h3>Another cool things that I enjoy</h3>
          <ul css={list}>
            {config.hobbies.map((hobby) => (
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
            If you wanna talk about your
            <i>
              <small>(open/closed)</small>
            </i>
            projects or business, you can
            <Link href='/contact'>
              <a css={link}>contact me!</a>
            </Link>
          </p>
          <p css={text}>
            <small>
              I did this an open-source project, if you need a site, feel free
              to take or collaborate it, here it's the
              <a href={config.repoUrl} css={link}>
                code
              </a>
              with an explanation of how to do a deploy with your data 💚
            </small>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
