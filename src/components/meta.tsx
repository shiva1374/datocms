import Head from 'next/head'
import config from 'lib/config'

const Meta: React.FC = () => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' type='text/css' href='/nprogress.css' />
      <title>{config.author}</title>
    </Head>
  )
}

export default Meta
