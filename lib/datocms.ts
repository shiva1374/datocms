import { GraphQLClient } from 'graphql-request'
import remark from 'remark'
import html from 'remark-html'
import { RequestProps, Post } from 'lib/types'

export const request = ({ query, variables }: RequestProps) => {
  const client = new GraphQLClient('https://graphql.datocms.com/', {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}

export const ALL_POSTS_QUERY = `
  query ALL_POSTS_QUERY($limit: IntType!) {
    allPosts(first: $limit) {
      id
      title
      excerpt
      date
      slug
      coverImage {
        responsiveImage(imgixParams: { fit: crop, w: 600, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
`

export const POST_QUERY = `
query POST_QUERY($slug: String!){
  post(filter: { slug: { eq: $slug } }) {
    content
    id
    title
    excerpt
    date
    slug
    coverImage {
      responsiveImage(imgixParams: { fit: crop, w: 600, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}
`

export const getAllPosts = async (): Promise<Post[]> => {
  const data = await request({
    query: ALL_POSTS_QUERY,
    variables: { limit: 10 },
  })
  return data?.allPosts
}

export const getPost = async (slug: string | string[]): Promise<Post> => {
  const data = await request({
    query: POST_QUERY,
    variables: { slug: slug },
  })
  const processedContent = await remark().use(html).process(data?.post.content)
  const content = processedContent.toString()
  return { ...data?.post, content }
}
