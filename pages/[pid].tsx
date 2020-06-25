/** @jsx jsx */
import { jsx } from '@emotion/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../src/components/layout'
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { getAllPostIds, getPost, post } from '../src/lib/posts'
import { main } from '../src/components/styles/styles'

export default function Post(props: { postData: post }) {
  const { postData } = props

  console.log('post ', postData)

  return (
    <Layout>
      <Header />
      <main css={main}></main>
      <Footer />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pid = params.pid
  const postData = await getPost(pid.toString())
  return {
    props: {
      postData,
    },
  }
}
