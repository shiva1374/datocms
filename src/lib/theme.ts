import { Theme } from './types'

const white = '#ffffff'
const pink = '#f628a0'
const black = '#131415'
const mirage = '#151f2b'

const themeLight = {
  background: white,
  body: black,
  primary: pink,
  white: white,
}
const themeDark = {
  background: mirage,
  body: white,
  primary: pink,
  white: white,
}

export default (mode: string): Theme =>
  mode === 'dark' ? themeDark : themeLight
