type Color = {
  pink: string,
  gray: string,
  black: string,
  white: string,
  yellow: string
}

type Type = {
  fontFamily: string,
  accent: {
    fontFamily: string
  },
  default: {
    fontFamily: string,
  },
  fontSize: string[],
  lineHeight: string[],
  fontWeight: {
    extraLight: number,
    light: number,
    book: number,
    medium: number,
    bold: number,
    black: number,
  }
}

type Theme = {
  color: Color,
  type: Type
}

let theme: Theme = {
  color: {
    pink: '#EEDEDE',
    gray: '#CDCDCD',
    black: '#454545',
    white: '#FFFFFF',
    yellow: '#FFFF00',
  },
  type: {
    fontFamily: "'Raleway', sans-serif",
    accent: {
      fontFamily: "'Coromorant Garamond', serif",
      // fontFamily: "'Libre Baskerville', serif",
      // fontFamily: "'Noto Serif TC', serif"
    },
    default: {
      fontFamily: "'Raleway', sans-serif",
    },
    fontSize: [
      '9px',
      '11px',
      '14px',
      '16px',
      '22px',
      '27px',
      '33px',
      '44px',
      '55px',
      '66px',
      '88px',
    ],
    lineHeight: [
      '12px',
      '16px',
      '18px',
      '22px',
      '26px',
      '32px',
      '36px',
      '46px',
      '56px',
      '66px',
      '88px',
    ],
    fontWeight: {
      extraLight: 200,
      light: 300,
      book: 400,
      medium: 500,
      bold: 700,
      black: 800,
    },
  }
}

export default theme
