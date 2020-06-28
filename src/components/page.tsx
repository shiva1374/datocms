/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import Header from 'components/header'
import Meta from 'components/meta'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const container = (theme: Theme) => css`
  color: ${theme.body};
  background-color: ${theme.background};
  *::selection {
    color: ${theme.white};
    background-color: ${theme.primary};
  }
`
const innerContainer = css`
  max-width: 50rem;
  padding: 2rem 0;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme<Theme>()
  return (
    <div css={container(theme)}>
      <Meta />
      <div css={innerContainer}>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Page
