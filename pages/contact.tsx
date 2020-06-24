/** @jsx jsx */
import { jsx } from '@emotion/core'
import Layout from '../src/components/layout'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { main, container } from '../src/components/styles/styles'

export default function Contact() {
  return (
    <Layout>
      <Header />
      <main css={main}>
        <div css={container}>
          <p>Contact</p>
        </div>
      </main>
      <Footer />
    </Layout>
  )
}
