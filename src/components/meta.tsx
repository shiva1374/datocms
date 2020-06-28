import Head from 'next/head'
import config from 'lib/config'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'

const Meta: React.FC = () => {
  const theme = useTheme<Theme>()

  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta charSet='utf-8' />
      <meta name='description' content={config.description} />
      <link rel='stylesheet' type='text/css' href='/nprogress.css' />
      <title>{config.author}</title>

      <meta name='keywords' content='Keywords' />

      <link rel='manifest' href='/manifest.json' />
      <link href='/icon-72x72.png' rel='icon' type='image/png' sizes='72x72' />
      <link
        href='/favicon-96x96.png'
        rel='icon'
        type='image/png'
        sizes='96x96'
      />
      <link rel='apple-touch-icon' href='/apple-icon.png'></link>
      <meta name='theme-color' content={theme.background} />
    </Head>
  )
}

export default Meta
