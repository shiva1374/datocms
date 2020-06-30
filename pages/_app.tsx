import { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { ThemeProvider } from 'src/context/theme-context'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  )
}

export default App
