import { css, keyframes } from '@emotion/core'

export const text = css`
  line-height: 1.7;
  letter-spacing: 1.2;
  font-size: 1.1em;
`

export const main = css`
  flex-grow: 1;
  padding: 3.5rem 2rem;
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
        #c40876 80%,
        #73dbc4 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  & .containerSubmit {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

export const authorImage = css`
  width: 7rem;
  height: 7rem;
  border-radius: 3.5rem;
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`
