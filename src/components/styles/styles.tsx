import { css, Global } from '@emotion/core'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #131415;
      }
      * {
        box-sizing: border-box;
        &::selection {
          color: #fff;
          background-color: #f857b5;
        }
      }
    `}
  />
)

export const text = css`
  line-height: 1.7;
  letter-spacing: 1.2;
  font-size: 1.2em;
`

export const main = css`
  flex-grow: 1;
`

export const container = css`
  padding: 3.5rem 1rem;
`
