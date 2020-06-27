/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { parseISO, format } from 'date-fns'

const text = css`
  color: #f628a0;
`

const Date: React.FC<{ dateString: string }> = ({ dateString }) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} css={text}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

export default Date
