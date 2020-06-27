/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ActiveLink from './active-link'
import { useTheme } from '../context/theme-context'

const Header: React.FC = () => {
  const [dark, toggle] = useTheme()
  return (
    <header>
      <nav
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        `}
      >
        <ActiveLink href='/'>
          <div
            css={css`
              width: 120px;
              height: 120px;
              background-color: #303030;
              border-radius: 60px;
              &:hover {
                cursor: pointer;
              }
            `}
          />
        </ActiveLink>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <ActiveLink href='/contact'>contact</ActiveLink>
          <ActiveLink href='/posts'>posts</ActiveLink>
          <button
            onClick={toggle}
            css={css`
              width: 30px;
              height: 30px;
              background-color: #303030;
              border-radius: 15px;
            `}
          >
            {dark ? 'L' : 'N'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
