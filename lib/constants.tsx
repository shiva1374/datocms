import { FaTwitter } from 'react-icons/fa'
import { Author } from 'lib/types'

export const SITE_TITLE = ''
export const SITE_URL = ''
export const author: Author = {
  name: 'Rick',
  description: `I turned myself into a website, Morty! Boom! Big reveal: I'm a websitee 🖥️`,
  hobbies: ['🚀 Space', '👨‍🔬 Science'],
  socialMedia: [
    {
      name: 'twitter',
      url: 'https://www.twitter.com/<username>/',
      icon: <FaTwitter />,
    },
  ],
}
