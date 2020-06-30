import { GraphQLClient } from 'graphql-request'
import { RequestProps, Author, Post } from 'src/lib/types'

export const request = ({ query, variables }: RequestProps) => {
  const endpoint = process.env.NEXT_DATOCMS_API_ENDPOINT
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}

export const AUTHOR_QUERY = `
  query AUTHOR_QUERY($name: String!) {
    author(filter: { name: { matches: { pattern: $name } } }) {
      name
      description
      hobbies
    }
  }
`

export const ALL_POSTS_QUERY = `
  query ALL_POSTS_QUERY($limit: IntType!) {
    allPosts(first: $limit) {
      id
      title
      excerpt
      date
      slug
      coverImage {
        responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
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
    author {
      name
    }
    content
    date
  }
}
`

export const getAuthor = async (): Promise<Author> => {
  const data = await request({
    query: AUTHOR_QUERY,
    variables: { name: 'Pablo Obando' },
  })
  return data.author
}

export const getAllPosts = async (): Promise<Post[]> => {
  const data = await request({
    query: ALL_POSTS_QUERY,
    variables: { limit: 10 },
  })
  return data.allPosts
}

export const getPost = async (slug: string | string[]): Promise<Post> => {
  const data = await request({
    query: POST_QUERY,
    variables: { slug: slug },
  })
  return data.post
}
