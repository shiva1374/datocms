/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaStackOverflow,
} from 'react-icons/fa'
import config from '../lib/config'

const icon = css`
  color: #131415;
  font-size: 2em;
  margin-left: 2rem;
  &:hover {
    color: #f628a0;
    transform: scale(1.3);
    cursor: pointer;
  }
`

export default function Footer() {
  return (
    <footer
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <p
        css={css`
          font-weight: bold;
        `}
      >
        #blacklivesmatter ✊🏾
      </p>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <a href={config.social.github} css={icon}>
          <FaGithub />
        </a>
        <a href={config.social.twitter} css={icon}>
          <FaStackOverflow />
        </a>
        <a href={config.social.twitter} css={icon}>
          <FaTwitter />
        </a>
        <a href={config.social.linkedIn} css={icon}>
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  )
}
