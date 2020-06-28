/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useRouter } from 'next/router'
import Link from 'next/link'

const a = (activeLink?: boolean) => css`
  margin-right: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${activeLink && '#f628a0'};
  &:hover {
    cursor: pointer;
    color: #f628a0;
  }
`

const ActiveLink: React.FC<{
  href: string
  children: React.ReactNode
}> = ({ href, children }) => {
  const { pathname } = useRouter()
  return (
    <Link href={`${href}`}>
      <a css={a(pathname.includes(href))}>{children}</a>
    </Link>
  )
}

export default ActiveLink
