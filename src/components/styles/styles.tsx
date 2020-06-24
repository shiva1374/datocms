import { css, Global, keyframes } from '@emotion/core'

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
          background-color: #f628a0;
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
  padding: 3.5rem 1rem;
`

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`

export const form = css`
  margin-top: 4rem;
  font-size: 1.5rem;
  line-height: 1.5;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #13141530;
    border-radius: 4px;
    &:focus {
      outline: 0;
      border-color: #f628a0;
    }
  }
  button,
  input[type='submit'] {
    cursor: pointer;
    align-self: flex-end;
    width: auto;
    background: #f628a0;
    color: white;
    border: 0;
    font-size: 2rem;
    padding: 0.5rem 4rem;
    border-radius: 4px;
    &:hover {
      opacity: 0.8;
    }
  }
  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      margin-bottom: 1.5rem;
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #73dbc4 0%,
        #c40876 60%,
        #73dbc4 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  & .containerSubmit {
    justify-content: flex-end;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    align-items: center;
  }
`

export const hand = css`
  width: 14rem;
  height: 2.5rem;
  background-color: #30303070;
  margin-right: 2rem;
`
