const github = 'http://github.com/danaoira'
const linkedin = 'http://linkedin.com/in/danaoira'

const noodle = 'http://noodle.ai'
const wd = 'http://wd.com'
const csufmse = 'http://www.fullerton.edu/ECS/mse/'
const codazen = 'http://codazen.com'

const csuf = 'http://www.fullerton.edu/ecs/cs/'
const uci = 'http://publichealth.uci.edu/ph/_home/'

const acm = 'https://www.acm.org/'
const wibd = 'https://www.womeninbigdata.org/'
const sfcma = 'https://www.sfcivicmusic.org/'

const react = 'http://reactjs.org'
const redux = 'https://redux.js.org/'
const styledcomponents = 'https://www.styled-components.com/'

const r = 'https://www.r-project.org/'
const epidemiology = 'https://en.wikipedia.org/wiki/Epidemiology'
const hci = 'https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction'
const graphtheory = 'https://en.wikipedia.org/wiki/Graph_theory'
const computation = 'https://en.wikipedia.org/wiki/Theory_of_computation'

const lists = {
  current: [
    {
      desc: `Looking for opportunities!`
    }
  ],
  former: [
    {
      link: noodle,
      role: 'UI Engineer',
      org: 'Noodle.ai'
    },
    {
      link: wd,
      role: 'Engineer Intern',
      org: 'Western Digital'
    },
    {
      link: codazen,
      role: 'Web Developer',
      org: 'Codazen'
    },
    // {
    //   link: csufmse,
    //   role: 'Grad Assistant',
    //   org: 'CSUF Master of Software Engineering'
    // },
    {
      link: csuf,
      role: 'Grad Student',
      org: 'CSUF Computer Science'
    },
    {
      link: uci,
      role: 'Undergrad',
      org: 'UCI Public Health'
    }
  ],
  associations: [
    {
      link: acm,
      org: 'Association for Computing Machinery' 
    },
    {
      link: wibd,
      org: 'Women in Big Data'
    },
    {
      link: sfcma,
      org: 'San Francisco Civic Music Association'
    }
  ]
}

export default {
  github,
  linkedin,

  noodle,
  wd,
  csufmse,
  codazen,

  csuf,
  uci,

  acm,
  wibd,
  sfcma,

  react,
  redux,
  styledcomponents,

  r,
  epidemiology,
  hci,
  graphtheory,
  computation,

  lists
}