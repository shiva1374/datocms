import { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { globalStyles } from '../src/components/styles/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  )
}
