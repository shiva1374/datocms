import { Post } from './types'

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()
  return posts
}

export const getPost = async (pid: string): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`)
  const postData: Post = await res.json()
  return postData
}

export const getAllPostIds = async (): Promise<
  { params: { pid: string } }[]
> => {
  const posts = await getPosts()
  return posts.map(({ id }) => ({
    params: {
      pid: id.toString(),
    },
  }))
}
