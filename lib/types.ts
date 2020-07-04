export type Author = {
  createdAt?: Date
  description?: String
  hobbies?: { values: string[] }
  id?: String
  name?: String
  picture?: any
  updatedAt?: Date
}

export type Social = {
  name: string
  url: string
  icon: React.ReactNode
}[]

export type Post = {
  author?: Author
  content?: string
  coverImage?: any
  createdAt?: string
  date?: string
  excerpt?: string
  id?: string
  slug?: string
  title?: string
  updatedAt?: string
}

export type ContactForm = {
  email: string
  name: string
  message: string
  loading?: boolean
}

export type Theme = {
  background: string
  body: string
  primary: string
  white: string
  contrast: string
}

export type RequestProps = {
  query: string
  variables: any
  preview?: boolean
}

export type MailResponse = {
  success: boolean
  message: string
}
