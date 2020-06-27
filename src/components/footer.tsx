/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { theme } from '../lib/theme'
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaStackOverflow,
} from 'react-icons/fa'
import config from '../lib/config'

const icon = css`
  font-size: 2em;
  margin-left: 2rem;
  &:hover {
    color: #f628a0;
    transform: scale(1.3);
    cursor: pointer;
  }
`

export default function Footer() {
  const theme = useTheme<theme>()
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
        <a
          href={config.social.github}
          css={css`
            ${icon};
            color: ${theme.body};
          `}
        >
          <FaGithub />
        </a>
        <a
          href={config.social.twitter}
          css={css`
            ${icon};
            color: ${theme.body};
          `}
        >
          <FaStackOverflow />
        </a>
        <a
          href={config.social.twitter}
          css={css`
            ${icon};
            color: ${theme.body};
          `}
        >
          <FaTwitter />
        </a>
        <a
          href={config.social.linkedIn}
          css={css`
            ${icon};
            color: ${theme.body};
          `}
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  )
}
