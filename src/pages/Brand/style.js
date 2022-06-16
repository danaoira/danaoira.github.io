import styled from 'styled-components'
import { theme } from '../../utils'

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2em;
    row-gap: 2em;
    margin-top: 92px;
  }
`

const AccentFont = styled.span`
  font-family: ${theme.type.accent.fontFamily};
  font-size: 2.4em;
  display: block;
`
const DefaultFont = styled.span`
  font-family: ${theme.type.default.fontFamily};
  font-size: 2.4em;
  display: block;
`

const ColorGrid = styled.div`
  display: flex;
  flex-direction: column;
  grid-auto-flow: row;

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 1em;
  }
`

const Section = styled.section`
  min-height: 50vh;

  @media (min-width: 1024px) {
    min-height: initial;
  }
`

export { Grid, AccentFont, DefaultFont, ColorGrid, Section }
