/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useRouter } from 'next/router'
import Link from 'next/link'

const a = (activeLink?: boolean) => css`
  margin-right: 1rem;
  text-transform: uppercase;
  font-size: 16px;
  text-decoration: none;
  color: ${activeLink && '#f628a0'};
  &:hover {
    cursor: pointer;
    color: #f628a0;
  }
`

type props = {
  href: string
  children: React.ReactNode
}

export default function ActiveLink({ href, children }: props) {
  const { pathname } = useRouter()
  return (
    <Link href={`${href}`}>
      <a css={a(pathname.includes(href))}>{children}</a>
    </Link>
  )
}
