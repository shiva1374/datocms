/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Page from 'components/page'
import { main, text, list, link } from 'pages'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import { author } from 'lib/constants'

const Contact: React.FC = () => {
  const theme = useTheme<Theme>()
  return (
    <Page>
      <main
        css={css`
          ${main};
          text-align: center;
        `}
      >
        <section>
          <h1>Let's talk about coding and business</h1>
          <h3 css={text}>You can found me in</h3>
          <ul css={list}>
            {author?.socialMedia?.map((media) => (
              <li key={media.name}>
                <a css={link(theme)} href={media.url} target='_blank'>
                  {media.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Page>
  )
}

export default Contact
