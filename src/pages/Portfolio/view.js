import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Grid, Tile, Title, Subtitle, Detail, Link } from './style'
import { inProgress, published } from './settings'

class About extends Component {
  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this)

    elem.style.opacity = 0
    window.requestAnimationFrame(function() {
      elem.style.transition = 'opacity 1000ms'
      elem.style.opacity = 1
    })
  }

  render() {
    return (
      <Grid>
        {inProgress.map((d) => (
          <Tile wip key={d.title}>
            <div>
              <Title>{d.title}</Title>
              <Subtitle>{d.subtitle}</Subtitle>
              <Subtitle>coming soon</Subtitle>
            </div>
          </Tile>
        ))}
        {published.map((d) => (
          <Link key={d.title} href={d.link}>
            <Tile image={d.image} style={d.style}>
              <Detail>
                <Title>{d.title}</Title>
                <Subtitle>{d.subtitle}</Subtitle>
              </Detail>
            </Tile>
          </Link>
        ))}
      </Grid>
    )
  }
}

export default About
