/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        max-width: 50rem;
        padding: 2rem 0;
        min-height: 100vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      `}
    >
      {children}
    </div>
  )
}
