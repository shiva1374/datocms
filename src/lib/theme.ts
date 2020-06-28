import { Theme } from './types'

const white = '#ffffff'
const black = '#131415'
const mirage = '#151f2b'

const themeLight = {
  background: white,
  body: black,
  primary: '#a2005f',
  white: white,
}
const themeDark = {
  background: mirage,
  body: white,
  primary: '#ff85cc',
  white: white,
}

export default (mode: string): Theme =>
  mode === 'dark' ? themeDark : themeLight
