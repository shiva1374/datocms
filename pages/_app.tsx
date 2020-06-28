import { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { ThemeProvider } from 'context/theme-context'
import { globalStyles } from 'components/styles/styles'
import Page from 'components/page'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
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

export default App
