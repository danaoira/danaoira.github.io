import styled from 'styled-components'
import { theme } from '.'

const Wrapper = styled.div``

const AppWrapper = styled.div`
  min-height: 100vh;
`

const Menu = styled.div`
  background-color: ${theme.color.pink};
  padding: 1em;
  display: grid;
  grid-template-columns: minmax(122px, 1fr) auto;

  @media (min-width: 800px) {
    display: block;
    background-color: ${theme.color.white};
    padding: 2em 0 0 3em;
  }
`

const Title = styled.h1`
  color: ${theme.color.black};
  font-family: ${theme.type.accent.fontFamily};
  font-weight: ${theme.type.fontWeight.extraLight};
  text-decoration: none;
  font-size: 1.2em;

  @media (min-width: 800px) {
    font-size: 3em;
    line-height: 1em;
    padding-bottom: 24px;
  }
`

const Subtitle = styled.h2`
  display: none;

  @media (min-width: 800px) {
    display: block;
    color: ${theme.color.black};
    font-family: ${theme.type.default.fontFamily};
    font-weight: ${theme.type.fontWeight.extraLight};
    font-size: 1.5em;
    text-decoration: none;
    letter-spacing: 1px;
    line-height: 1.2em;
    padding-bottom: 24px;
  }
`

const List = styled.ul`
  line-height: 1.5em;
  list-style: none;
  list-style-position: outside;
  padding: 0;

  > li {
    display: inline;
    margin-right: 1em;
  }

  > li > a {
    color: ${theme.color.black};
    font-family: ${theme.type.accent.fontFamily};
    font-size: 0.8em;
    text-decoration: none;
    border-bottom: solid 2px ${theme.color.pink};
    transition: border-bottom 0.25s ease-in-out;

    :hover {
      color: ${theme.color.black};
      border-bottom: solid 2px ${theme.color.white};
      cursor: pointer;
    }

    @media (min-width: 800px) {
      font-size: 1em;
      border-bottom: solid 2px ${theme.color.white};

      :hover {
        border-bottom: solid 2px ${theme.color.pink};
      }
    }
  }
`

const Link = styled.a`
  color: ${theme.color.black};
  font-family: ${theme.type.accent.fontFamily};
  font-size: 0.8em;
  text-decoration: none;
  border-bottom: solid 2px ${theme.color.pink};
  transition: border-bottom 0.25s ease-in-out;

  :hover {
    color: ${theme.color.black};
    border-bottom: solid 2px ${theme.color.white};
    cursor: pointer;
  }

  @media (min-width: 800px) {
    font-size: 1em;
    border-bottom: solid 2px ${theme.color.white};

    :hover {
      border-bottom: solid 2px ${theme.color.pink};
    }
  }
`

const Paragraph = styled.div`
  color: ${theme.color.black};
  font-family: ${theme.type.accent.fontFamily};
  font-weight: ${theme.type.fontWeight.extraLight};
  margin-top: 1.6em;
`

export { Wrapper, AppWrapper, Menu, Title, Subtitle, List, Link, Paragraph }
