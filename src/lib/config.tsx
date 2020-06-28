import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
} from 'react-icons/fa'
import { Config } from './types'

const config: Config = {
  author: 'Pablo Obando',
  description: `I'm mid Software Developer, a simple guy who enjoys programming and good beers 🍺`,
  hobbies: [
    '💚 Open Source',
    '👩‍🔬 Science',
    '📜 History',
    '🦄 Chill out',
    '😄 Smile',
    '🍻 More beers with good friends',
    '💻 More programming',
  ],
  siteUrl: 'https://pabloobando.dev',
  repoUrl: '',
  social: [
    {
      name: 'facebook',
      url: 'https://www.twitter.com/pabloobandodev/',
      icon: <FaTwitter />,
    },
    {
      name: 'github',
      url: '​https://www.github.com/pabloobandodev',
      icon: <FaGithub />,
    },
    {
      name: 'linkedin',
      url: '​https://www.linkedin.com/in/pabloobandodev',
      icon: <FaLinkedinIn />,
    },
    {
      name: 'stackoverflow',
      url: '​https://stackoverflow.com/story/pabloobandodev',
      icon: <FaStackOverflow />,
    },
  ],
}

export default config
