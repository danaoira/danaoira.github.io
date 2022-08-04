import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from 'react-router-dom'
import combinedReducer from './store/combinedReducer'
import combinedEpics from './store/combinedEpics'
import { Menu, Title, Subtitle, List, Link } from './utils/style'
import { links } from './utils'
import { About, Portfolio, CareerProgression } from './pages'

const epicMiddleware = createEpicMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(
  combinedReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
)
// let store = configureStore({
//   store:
// })
epicMiddleware.run(combinedEpics)

const Main = styled.div`
  overflow-y: scroll;

  @media (min-width: 800px) {
    padding-right: 5vw;
  }
`

const ListItem = (props) => (
  <>
    {props.href ? (
      <li>
        <Link {...props}>{props.children}</Link>
      </li>
    ) : (
      <li>{props.children}</li>
    )}
  </>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
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
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route
                path="/portfolio/career-progression"
                element={<CareerProgression />}
              />
              {/* <Route path="/unt-ebola" component={UntEbola} /> */}
            </Routes>
          </Main>
        </Router>
      </Provider>
    )
  }
}

export default App
