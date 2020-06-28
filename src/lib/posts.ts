import { Post } from './types'

export const getPosts = async (): Promise<Post[]> => [
  { userId: 1, id: 1, title: 'Title', body: 'Body' },
]

export const getPost = async (pid: string): Promise<Post> => ({
  userId: 1,
  id: 1,
  title: 'Title',
  body: 'Body',
})

export const getAllPostIds = async (): Promise<
  { params: { pid: string } }[]
> => [
  {
    params: {
      pid: '1',
    },
  },
]
