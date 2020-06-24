/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import Layout from '../src/components/layout'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import config from '../src/lib/config'
import { text, main } from '../src/components/styles/styles'

const ul = css`
  ${text};
  padding: 0 1rem 2rem;
  & > li > span {
    color: #f628a0;
  }
`

const a = css`
  ${text};
  color: #f628a0;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

const i = css`
  font-size: 0.8em;
`

export default function Home() {
  const renderHobbies = () =>
    config.hobbies.map((hobby) => (
      <li key={hobby}>
        <span>{hobby}</span>
      </li>
    ))

  return (
    <Layout>
      <Header />
      <main css={main}>
        <section>
          <h2 css={text}>Hey ✌️</h2>
          <p css={text}>
            My name is <strong>{config.author}</strong>, {config.description}
          </p>
          <h3>Another cool things that I enjoy</h3>
          <ul css={ul}>{renderHobbies()}</ul>
          <p css={text}>
            This site has it a part of the blog with all my thoughts, and my
            articles of software{' '}
            <i css={i}>
              (yeah, I know there are a lot of JS articles is because I love
              it...)
            </i>
          </p>
          <p css={text}>
            If you wanna talk about your <i css={i}>(open/closed)</i> projects
            or business, you can{' '}
            <Link href='/contact'>
              <a css={a}>contact me!</a>
            </Link>
          </p>
          <p css={text}>
            I did this open-source project, if you need a site, feel free to
            take or collaborate it, here it's the{' '}
            <a href={config.repoUrl} css={a}>
              code
            </a>{' '}
            with an explanation of how to do a deploy with your data 💚
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  )
}
