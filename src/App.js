import React, { Component } from 'react'
import styled from 'styled-components'
import { Route, Link as RouterLink } from 'react-router-dom'
import { Menu, Title, Subtitle, List, Link } from './utils/style'
import { links, theme } from './utils'
import { About, Portfolio, CareerProgression } from './pages'

const Main = styled.div`
  overflow-y: scroll;
  // background-color: ${(props) => theme.color.pink};

  @media (min-width: 800px) {
    padding-right: 5vw;
  }
`

const ListItem = (props) => (
  <React.Fragment>
    {props.href ? (
      <li>
        <Link {...props}>{props.children}</Link>
      </li>
    ) : (
      <li>{props.children}</li>
    )}
  </React.Fragment>
)

class App extends Component {
  render() {
    return (
      <>
        <Menu>
          <Title>Dana Oira Shi</Title>
          <Subtitle>
            Data Visualization
            <br />
            UI Engineer
          </Subtitle>
          <List>
            <ListItem>
              <RouterLink to="/portfolio">Portfolio</RouterLink>
            </ListItem>
            <ListItem>
              <RouterLink to="/about">About</RouterLink>
            </ListItem>
            <ListItem href={links.linkedin}>
              <i className="fab fa-linkedin" />
            </ListItem>
            <ListItem href={links.github}>
              <i className="fab fa-github" />
            </ListItem>
            <ListItem href={'mailto:danaoira@live.com'}>
              <i className="far fa-envelope" />
            </ListItem>
          </List>
        </Menu>
        <Main>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/about/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            exact
            path="/portfolio/spider-chart"
            component={CareerProgression}
          />
          {/* <Route path="/unt-ebola" component={UntEbola} /> */}
        </Main>
      </>
    )
  }
}

export default App
