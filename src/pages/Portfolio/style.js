import styled from 'styled-components'
import { theme } from '../../utils'

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    row-gap: 2em;
    margin: 28px 0;
  }
`

const Tile = styled.div`
  font-family: ${theme.type.accent.fontFamily};
  background: ${theme.color.pink};
  color: ${(props) => (props.wip ? theme.color.white : theme.color.black)};
  font-weight: ${theme.type.fontWeight.normal};
  border: solid 1px ${theme.color.pink};
  background: ${(props) =>
    props.image ? `url(${require('../../images/' + props.image)})` : null};
  height: 36vh;
  display: table;
  width: 100%;

  :hover {
    cursor: ${(props) => (props.wip ? 'not-allowed' : 'pointer')};
  }

  > div {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  > img {
    height: 200px;
  }

  @media (min-width: 1024px) {
    min-height: initial;
  }
`

const Title = styled.div`
  font-size: 2em;
  line-height: 1.8em;
  display: block;
`

const Subtitle = styled.div`
  font-size: 1.2em;
  font-style: italic;
  line-height: 1.8em;
  display: block;
`

const Detail = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.color.pink};
  opacity: 0;
  transition: opacity 0.25s ease-in-out;

  :hover {
    opacity: 1;
    text-decoration: none;
  }
`

const Link = styled.a`
  text-decoration: none;
`

export { Grid, Tile, Title, Subtitle, Detail, Link }
