/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'emotion-theming'
import { Theme } from 'src/lib/types'

const a = (active: boolean, theme: Theme) => css`
  margin-right: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${active ? theme.primary : theme.body};
  &:hover {
    cursor: pointer;
    color: ${theme.primary};
  }
`

const ActiveLink: React.FC<{
  href: string
  children: React.ReactNode
}> = ({ href, children }) => {
  const { pathname } = useRouter()
  const theme = useTheme<Theme>()
  return (
    <Link href={`${href}`}>
      <a css={a(pathname.includes(href), theme)}>{children}</a>
    </Link>
  )
}

export default ActiveLink
