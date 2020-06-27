export type theme = {
  background: string
  body: string
  primary: string
  white: string
}

const white = '#ffffff'
const pink = '#f628a0'
const black = '#222639'

const themeLight = {
  background: white,
  body: black,
  primary: pink,
  white: white,
}
const themeDark = {
  background: black,
  body: white,
  primary: pink,
  white: white,
}

export default (mode: string): theme =>
  mode === 'dark' ? themeDark : themeLight
