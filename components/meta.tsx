import Head from 'next/head'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/types'
import { SITE_TITLE } from 'lib/constants'

const Meta: React.FC = () => {
  const theme = useTheme<Theme>()
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta charSet='utf-8' />
      <meta name='description' content='Personal website' />
      <link rel='stylesheet' type='text/css' href='/nprogress.css' />
      <meta name='keywords' content='Keywords' />
      <meta name='theme-color' content={theme.background} />
      <title>{SITE_TITLE}</title>
    </Head>
  )
}

export default Meta
