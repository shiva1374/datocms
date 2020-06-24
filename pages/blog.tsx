/** @jsx jsx */
import { jsx } from '@emotion/core'
import Layout from '../src/components/layout'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { main } from '../src/components/styles/styles'

export default function Blog() {
  return (
    <Layout>
      <Header />
      <main css={main}>
        <section>
          <p>Blog</p>
        </section>
      </main>
      <Footer />
    </Layout>
  )
}
