/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { parseISO, format } from 'date-fns'
import { Theme } from 'lib/types'
import { useTheme } from 'emotion-theming'

const text = (theme: Theme) => css`
  color: ${theme.primary};
`

const Date: React.FC<{ dateString: string }> = ({ dateString }) => {
  const theme = useTheme<Theme>()
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} css={text(theme)}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

export default Date
