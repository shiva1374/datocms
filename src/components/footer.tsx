/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
} from 'react-icons/fa'
import { useTheme } from 'emotion-theming'
import { Theme, Social } from 'src/lib/types'

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const hashtag = css`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`

const containerIcons = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const iconStyle = (theme: Theme) => css`
  color: ${theme.body};
  font-size: 2em;
  margin-left: 2rem;
  &:hover {
    color: ${theme.primary};
    transform: scale(1.3);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`

const social: Social = [
  {
    name: 'facebook',
    url: 'https://www.twitter.com/pabloobandodev/',
    icon: <FaTwitter />,
  },
  {
    name: 'github',
    url: 'https://github.com/pabloobandodev',
    icon: <FaGithub />,
  },
  {
    name: 'linkedin',
    url: '​https://www.linkedin.com/in/pabloobandodev',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'stackoverflow',
    url: '​https://stackoverflow.com/story/pabloobandodev',
    icon: <FaStackOverflow />,
  },
]

const Footer: React.FC = () => {
  const theme = useTheme<Theme>()
  return (
    <footer css={container}>
      <p css={hashtag}>#blacklivesmatter ✊🏾</p>
      <div css={containerIcons}>
        {social.map(({ name, url, icon }) => (
          <a
            key={url}
            href={url}
            css={iconStyle(theme)}
            target='_blank'
            aria-label={name}
            rel='noopener'
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
