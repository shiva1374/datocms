/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import config from 'lib/config'

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const hashtag = css`
  font-weight: bold;
`

const iconStyle = (theme: Theme) => css`
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
    <footer css={container}>
      <p css={hashtag}>#blacklivesmatter ✊🏾</p>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        {config.social.map(({ url, icon }) => (
          <a key={url} href={url} css={iconStyle(theme)} target='_blank'>
            {icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
