/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Theme } from 'src/lib/types'
import { useTheme } from 'emotion-theming'

const container = (theme: Theme) => css`
  padding: 1rem 0;
  border-top: 1px solid ${theme.primary};
  border-bottom: 1px solid ${theme.primary};
  margin-bottom: 2rem;
  display: flex;
`

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme<Theme>()
  return <div css={container(theme)}>{children}</div>
}

export default Card
