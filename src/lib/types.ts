export type Config = {
  author: string
  description: string
  hobbies: string[]
  siteUrl: string
  repoUrl: string
  social: {
    name: string
    url: string
    icon: React.ReactNode
  }[]
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type ContactForm = { email: string; name: string; message: string }

export type Theme = {
  background: string
  body: string
  primary: string
  white: string
  contrast: string
}
