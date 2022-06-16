import styled from 'styled-components'
import { theme } from '../../utils'

const Grid2Col = styled.div`
  font-family: ${theme.type.accent.fontFamily};
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  padding: 1em;

  > .about {
    grid-area: about;
    grid-row: 1 / span 4;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-areas:
      'about current'
      'about former'
      'about associations';
    grid-auto-columns: 1fr;
    column-gap: 3em;
    row-gap: 2em;
    padding: 28px 0;
  }
`

const Section = styled.section`
  height: auto;

  @media (min-width: 1024px) {
    min-height: initial;
  }
`

const Title = styled.div`
  font-size: 1.8em;
  line-height: 2.4em;
  display: block;
`

const Paragraph = styled.div`
  line-height: 1.6em;
  margin-bottom: 1em;
`

const List = styled.ul`
  list-style-type: none;
`

const ListItem = styled.li`
  line-height: 1.6em;
`

const Link = styled.a`
  color: ${theme.color.black};
  text-decoration: none;
  border-bottom: solid 2px ${theme.color.pink};
  transition: border-bottom 0.5s ease-in-out;

  :hover {
    background: ${theme.color.white};
    border-bottom: solid 2px ${theme.color.white};
  }
`

const SideNote = styled.span`
  color: ${theme.color.black};
  font-style: italic;
  font-size: 0.8em;
`

const Avatar = styled.img`
  width: 120px;
  border-radius: 50%;
  margin-top: 1em;
`

export {
  Grid2Col,
  Section,
  Title,
  Paragraph,
  List,
  ListItem,
  Link,
  SideNote,
  Avatar,
}
