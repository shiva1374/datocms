export type post = {
  userId: number
  id: number
  title: string
  body: string
}

export const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: post[] = await res.json()
  return posts
}

export const getPost = async (pid: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`)
  const postData: post = await res.json()
  return postData
}

export const getAllPostIds = async () => {
  const posts = await getPosts()
  return posts.map(({ id }) => ({
    params: {
      pid: id.toString(),
    },
  }))
}
