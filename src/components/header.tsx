/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FaLightbulb } from 'react-icons/fa'
import ActiveLink from './active-link'
import { useTheme } from 'context/theme-context'
import config from 'lib/config'

const logo = css`
  width: 8rem;
  height: 8rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`

const themeMode = css`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
  }
`

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 1rem;
`
const options = css`
  display: flex;
  align-items: center;
`

const Header: React.FC = () => {
  const [, toggle] = useTheme()
  return (
    <header>
      <nav css={container}>
        <ActiveLink href='/'>
          <img src='/images/profile.png' css={logo} alt={config.author} />
        </ActiveLink>
        <div css={options}>
          <ActiveLink href='/contact'>contact</ActiveLink>
          <ActiveLink href='/posts'>posts</ActiveLink>
          <button onClick={toggle} css={themeMode} aria-label='Switch mode'>
            <FaLightbulb />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
