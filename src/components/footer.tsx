/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme } from '../lib/types'
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaStackOverflow,
} from 'react-icons/fa'
import config from '../lib/config'

const hashtag = css`
  font-weight: bold;
`

const icon = (theme: Theme) => css`
  color: ${theme.body};
  font-size: 2em;
  margin-left: 2rem;
  &:hover {
    color: #f628a0;
    transform: scale(1.3);
    cursor: pointer;
  }
`

const Footer: React.FC = () => {
  const theme = useTheme<Theme>()
  return (
    <footer
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <p css={hashtag}>#blacklivesmatter ✊🏾</p>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <a href={config.social.github} css={icon(theme)}>
          <FaGithub />
        </a>
        <a href={config.social.twitter} css={icon(theme)}>
          <FaStackOverflow />
        </a>
        <a href={config.social.twitter} css={icon(theme)}>
          <FaTwitter />
        </a>
        <a href={config.social.linkedIn} css={icon(theme)}>
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  )
}

export default Footer
