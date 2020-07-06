import { FaTwitter } from 'react-icons/fa'
import { Social } from 'lib/types'

export const SITE_TITLE = 'site title'
export const SITE_URL = 'site url'
export const AUTHOR_NAME_DATOCMS = 'name'

export const socialMedia: Social = [
  {
    name: 'twitter',
    url: 'https://www.twitter.com/<username>/',
    icon: <FaTwitter />,
  },
]
