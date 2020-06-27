import { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { ThemeProvider } from '../src/context/theme-context'
import { globalStyles } from '../src/components/styles/styles'
import Page from '../src/components/page'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CacheProvider value={cache}>
        {globalStyles}
        <Page>
          <Component {...pageProps} />
        </Page>
      </CacheProvider>
    </ThemeProvider>
  )
}
