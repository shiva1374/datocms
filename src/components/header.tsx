/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'

const a = css`
  margin-right: 1rem;
  text-transform: uppercase;
  font-size: 16px;
  text-decoration: none;
  color: #303030;
  &:hover {
    cursor: pointer;
    color: #f857b5;
  }
`

export default function Header() {
  return (
    <header>
      <nav
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        `}
      >
        <Link href='/'>
          <a
            css={css`
              ${a};
              width: 120px;
              height: 120px;
              background-color: #303030;
              color: #fff;
              border-radius: 60px;
            `}
          />
        </Link>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href='/contact'>
            <a css={a}>contact</a>
          </Link>
          <Link href='/blog'>
            <a css={a}>blog</a>
          </Link>

          <div
            css={css`
              width: 30px;
              height: 30px;
              background-color: #303030;
              border-radius: 15px;
            `}
          />
        </div>
      </nav>
    </header>
  )
}
