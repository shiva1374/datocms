type config = {
  author: string
  description: string
  hobbies: string[]
  siteUrl: string
  repoUrl: string
  social: {
    twitter: string
    github: string
    linkedIn: string
    stackOverflow: string
    email: string
  }
}

const config: config = {
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
  social: {
    twitter: 'https://twitter.com/pabloobandodev',
    github: '​https://github.com/pabloobandodev',
    linkedIn: '​https://www.linkedin.com/in/pabloobandodev',
    stackOverflow: '​https://stackoverflow.com/story/pabloobandodev',
    email: 'josepabloobandogonzalez@gmail.com',
  },
}

export default config
