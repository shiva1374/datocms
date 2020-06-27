/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useTheme } from 'emotion-theming'
import { Theme } from '../lib/theme'
import Header from './header'
import Meta from './meta'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function Page({ children }: { children: React.ReactNode }) {
  const theme = useTheme<Theme>()
  return (
    <div
      css={css`
        color: ${theme.body};
        background-color: ${theme.background};
        *::selection {
          color: ${theme.white};
          background-color: ${theme.primary};
        }
      `}
    >
      <Meta />
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
        <Header />
        {children}
      </div>
    </div>
  )
}
