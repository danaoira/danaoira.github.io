import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { links } from '../../utils'
import {
  Grid2Col,
  Section,
  Title,
  Paragraph,
  List,
  ListItem,
  Link,
  SideNote,
  Avatar
} from './style'

const LinkSection = ({ data, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <List>
        {data.map(d => (
          <ListItem>{d.role ? `${d.role} at ` : null}<Link href={d.link}>{d.org}</Link> {d.desc ? (<SideNote>{d.desc}</SideNote>) : null}</ListItem>
        ))}
      </List>
    </Section>
  )
}

const AvatarSection = () => (
  <Section>
    <Avatar src={require('../../images/danaoira.jpg')} />
  </Section>
)

class About extends Component {
  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this)

    elem.style.opacity = 0
    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 1200ms"
      elem.style.opacity = 1
    })
  }

  render() {
    return (
      <Grid2Col>
        <Section className={'about'}>
          <Title>Hello, my name is Dana.</Title>
          <Paragraph>I like to say that I grew up with the Internet.</Paragraph>
          <Paragraph>I started creating websites in 1999 in grade school. Those were the days of dial-up, <Link href={links.dhtml}>DHTML</Link> and life before social networks existed - it was a magical, neverending frontier.</Paragraph>
          <Paragraph>While discovering my career path, I studied Public Health where I used <Link href={links.r}>R</Link> to visualize <Link href={links.epidemiology}>epidemiology</Link> and statistics. I took <Link href={links.hci}>Human Computer Interaction</Link> on a whim and realized my love for creating on the internet was still there.</Paragraph>
          <Paragraph>I was later accepted to a computer science graduate program where I enjoyed studying <Link href={links.graphtheory}>graph theory</Link>, <Link href={links.computation}>theory of computation</Link> and advanced software processes.</Paragraph>
          <Paragraph>After all the code I wrote, I realized that the common denominator was creating data visualizations.</Paragraph>
          <Paragraph>These days, I am seeking a full-time position based in San Francisco where I can enjoy the challenge of taking arbitrary ideas and transforming them into beautiful and functional data visualizations. I would love to work with Public Health or Epidemiology data, especially if Machine Learning and AI are involved.</Paragraph>
          <Paragraph>Please reach out to me on <Link href={links.linkedin}>LinkedIn</Link> if you're interested in hiring me!</Paragraph>
        </Section>
        <LinkSection data={links.lists.current} title={'Current'} />
        <LinkSection data={links.lists.former} title={'Former'} />
        <LinkSection data={links.lists.associations} title={'Associations'} />
        <AvatarSection />
      </Grid2Col>
    )
  }
}

export default About