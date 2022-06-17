import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Tile, Title, Subtitle, Detail, Link } from './style'
import { inProgress, published } from './settings'

const About = () => {
  // componentDidMount() {
  //   var elem = ReactDOM.findDOMNode(this)

  //   elem.style.opacity = 0
  //   window.requestAnimationFrame(function() {
  //     elem.style.transition = 'opacity 1000ms'
  //     elem.style.opacity = 1
  //   })
  // }
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
      {published.map((d) =>
        d.route ? (
          <RouterLink
            key={d.title}
            to={d.route}
            style={{ textDecoration: 'none' }}
          >
            <Tile image={d.image} style={d.style}>
              <Detail>
                <Title>{d.title}</Title>
                <Subtitle>{d.subtitle}</Subtitle>
              </Detail>
            </Tile>
          </RouterLink>
        ) : (
          <Link key={d.title} href={d.link}>
            <Tile image={d.image} style={d.style}>
              <Detail>
                <Title>{d.title}</Title>
                <Subtitle>{d.subtitle}</Subtitle>
              </Detail>
            </Tile>
          </Link>
        )
      )}
    </Grid>
  )
}

export default About
