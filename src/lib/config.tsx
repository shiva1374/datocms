import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaEnvelope,
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
      url: 'https://www.twitter.com/pabloobandodev/',
      icon: <FaTwitter />,
    },
    {
      url: '​https://www.github.com/pabloobandodev',
      icon: <FaGithub />,
    },
    {
      url: '​https://www.linkedin.com/in/pabloobandodev',
      icon: <FaLinkedinIn />,
    },
    {
      url: '​https://stackoverflow.com/story/pabloobandodev',
      icon: <FaStackOverflow />,
    },
    {
      url: 'mailto:josepabloobandogonzalez@gmail.com',
      icon: <FaEnvelope />,
    },
  ],
}

export default config
