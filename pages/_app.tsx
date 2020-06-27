import { AppProps } from 'next/app'
import { ThemeProvider } from '../src/context/theme-context'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { GlobalStyles } from '../src/components/styles/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  )
}
