import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import {
  BrowserRouter as Router,
  Route,
  Link as RouterLink
} from 'react-router-dom'
import combinedReducer from './store/combinedReducer'
import combinedEpics from './store/combinedEpics'
import {
  Menu,
  Title,
  Subtitle,
  List,
  Link
} from './utils/style'
import { links } from './utils'
import { About, Portfolio } from './pages'

const epicMiddleware = createEpicMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(
  combinedReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)
epicMiddleware.run(combinedEpics)

const Main = styled.div`
  overflow-y: scroll;

  @media (min-width: 800px) {
    padding-right: 5vw;
  }
`

const ListItem = (props) => (
  <React.Fragment>
    {props.href
      ? <li><Link {...props}>{props.children}</Link></li>
      : <li>{props.children}</li>
    }
  </React.Fragment>
)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Menu>
            <Title>Dana Oira</Title>
            <Subtitle>Data Visualization<br />UI Engineer</Subtitle>
            <List>
              <ListItem>
                <RouterLink to="/portfolio">Portfolio</RouterLink>
              </ListItem>
              <ListItem>
                <RouterLink to="/about">About</RouterLink>
              </ListItem>
              <ListItem href={links.linkedin}><i className="fab fa-linkedin"></i></ListItem>
              <ListItem href={links.github}><i className="fab fa-github"></i></ListItem>
              <ListItem href={'mailto:danaoira@live.com'}><i className="far fa-envelope"></i></ListItem>
            </List>
          </Menu>
          <Main>
            <Route path="/" exact component={Portfolio} />
            <Route path="/about/" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            {/* <Route path="/unt-ebola" component={UntEbola} /> */}
          </Main>
        </Router>
      </Provider>
    )
  }
}

export default App
