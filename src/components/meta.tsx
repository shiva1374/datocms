import Head from 'next/head'
import config from 'lib/config'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'

const Meta: React.FC = () => {
  const theme = useTheme<Theme>()

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta charSet='utf-8' />
      <meta name='description' content={config.description} />
      <link rel='stylesheet' type='text/css' href='/nprogress.css' />
      <meta name='keywords' content='Keywords' />
      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content={theme.background} />
      <title>{config.author}</title>
    </Head>
  )
}

export default Meta
