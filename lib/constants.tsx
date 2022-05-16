import { FaTwitter } from 'react-icons/fa'
import { Author } from 'lib/types'

export const SITE_TITLE = ''
export const SITE_URL = ''
export const author: Author = {
  name: 'Shiva',
  description: `I am software developer 🖥️`,
  hobbies: ['🚀 more programming', '👨‍🔬 Science'],
  socialMedia: [
    {
      name: 'twitter',
      url: 'https://www.twitter.com/<username>/',
      icon: <FaTwitter />,
    },
  ],
}
