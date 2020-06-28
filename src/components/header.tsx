/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ActiveLink from './active-link'
import { useTheme } from 'context/theme-context'

const logo = css`
  width: 7rem;
  height: 7rem;
  border-radius: 4.5rem;
  background-color: #303030;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
  }
`

const themeMode = css`
  width: 2rem;
  height: 2rem;
  background-color: #303030;
  border-radius: 1rem;
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
  const [dark, toggle] = useTheme()
  return (
    <header>
      <nav css={container}>
        <ActiveLink href='/'>
          <div css={logo} />
        </ActiveLink>
        <div css={options}>
          <ActiveLink href='/contact'>contact</ActiveLink>
          <ActiveLink href='/posts'>posts</ActiveLink>
          <button onClick={toggle} css={themeMode} />
        </div>
      </nav>
    </header>
  )
}

export default Header
