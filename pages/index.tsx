/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import Page from 'components/page'
import Footer from 'components/footer'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import { author } from 'lib/constants'

export const text = css`
  line-height: 1.7;
  letter-spacing: 1.2;
  font-size: 1.1em;
`

export const main = css`
  flex-grow: 1;
  padding: 3.5rem 2rem;
`

const list = css`
  ${text};
  padding: 0 1rem 2rem;
`

const link = (theme: Theme) => css`
  ${text};
  text-decoration: none;
  color: ${theme.primary};
`

const Home: React.FC = () => {
  const theme = useTheme<Theme>()
  return (
    <Page>
      <main css={main}>
        <section>
          <h2 css={text}>Hey ✌️</h2>
          <p css={text}>
            My name is <strong>{author?.name}</strong>, {author?.description}
          </p>
          <h3>Another cool things that I enjoy</h3>
          <ul css={list}>
            {author?.hobbies?.map((hobby) => (
              <li key={hobby}>{hobby}</li>
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
              <a css={link(theme)}>contact me!</a>
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </Page>
  )
}

export default Home
