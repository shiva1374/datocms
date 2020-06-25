/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { parseISO, format } from 'date-fns'

const text = css`
  color: #f628a0;
`

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} css={text}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}
