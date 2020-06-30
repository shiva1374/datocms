/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import Page from 'src/components/page'
import Footer from 'src/components/footer'
import { main, text } from 'src/styles'

const SourceCode: React.FC = () => {
  return (
    <Page>
      <main css={main}>
        <section css={text}>
          <h1>Hi dude!</h1>
        </section>
      </main>
      <Footer />
    </Page>
  )
}

export default SourceCode
