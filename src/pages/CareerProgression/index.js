import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../utils'

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2em;
    row-gap: 2em;
    margin: 28px 0;
  }
`

const Div = styled.div`
  font-family: ${theme.type.accent.fontFamily};
  font-size: ${theme.type.fontSize[4]};
  line-height: ${theme.type.lineHeight[4]};
  padding: 0 12vw;
`

const Link = styled.a`
  color: ${theme.color.black};
  text-decoration: none;
  border-bottom: solid 2px ${theme.color.pink};
  transition: border-bottom 0.25s ease-in-out;

  :hover {
    background: ${theme.color.white};
    border-bottom: solid 2px ${theme.color.white};
  }
`

// const getContentSize = (ref) => {
//   if (!ref || !ref.current) return [null, null]
//   const s = [ref.current.clientWidth, ref.current.clientHeight]
//   const computed = getComputedStyle(ref.current)
//   return [
//     s[0] - parseFloat(computed.paddingLeft) - parseFloat(computed.paddingRight),
//     s[1] - parseFloat(computed.paddingTop) - parseFloat(computed.paddingBottom),
//   ]
// }

const vennData = {
  uxDesign: {
    title: 'User Experience Design',
    skills: [
      'Information Architecture',
      'Product Design',
      'Service Design',
      'Interaction Design',
      'Visual Design',
      'UI Design',
      'Usability Engineering',
      'Perception, Cognition, Psychology',
      'Human Computer Interaction',
    ],
  },
  digitalTechnology: {
    title: 'Digital Technology',
    skills: [
      'Software Architecture',
      'Software Development',
      'Software Testing',
      'Software Development Lifecycle',
      'UI Technology',
      'Cloud Computing',
      'Cyber Security',
      'Programming Languages',
      'Databases & Modeling',
    ],
  },
}

const SpiderChart = () => {
  let ref = useRef(null)
  let [width, setWidth] = useState(720)
  let [height, setHeight] = useState(720)
  let [radius, setRadius] = useState(256)

  useEffect(
    () => {
      if (!ref || !ref.current) return
      const computed = getComputedStyle(ref.current)
      const parsedWidth = parseFloat(computed.width)
      const parsedHeight = parseFloat(computed.height)
      setWidth(parsedWidth)
      setHeight(Math.min(parsedHeight, height))
      if (width / 2 < radius) setRadius(width / 4)
    },
    [ref]
  )

  return (
    <Grid ref={ref}>
      <Div>
        It seemed like a very long time ago that I was curious what it meant to
        be a Design Technologist. I was working as a UI Engineer at Noodle AI
        when the team was renamed and that was the first time I had heard of the
        term.
      </Div>
      <Div>
        As a typical engineer, I went to the best resource I could use to help
        me find answers & my search brought me to Eric Knudtson's post,
        <Link
          href="http://ericknudtson.com/ux-design-technologist.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontStyle: 'italic', marginLeft: '4px' }}
        >
          What is a UX Design Technologist?
        </Link>
      </Div>
      <svg
        viewBox={`0 0 ${width} ${radius * 5}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill={theme.color.pink} />
        <g transform={`translate(${(width - radius * 3.6) / 2}, 0)`}>
          <g transform={`translate(${radius * 1.8}, 64)`}>
            <text
              x="0"
              y="0"
              style={{
                fontFamily: theme.type.accent.fontFamily,
                fontSize: theme.type.fontSize[6],
                fill: theme.color.black,
                textAnchor: 'middle',
              }}
            >
              The Design Technology Skillset
            </text>
            <text
              x="0"
              y="32"
              style={{
                fontFamily: theme.type.accent.fontFamily,
                fontSize: theme.type.fontSize[3],
                fill: theme.color.black,
                textAnchor: 'middle',
                fontStyle: 'italic',
              }}
            >
              by{' '}
              <a
                href="http://ericknudtson.com/ux-design-technologist.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eric Knudtson
              </a>
            </text>
          </g>

          <g transform={`translate(0, 96)`}>
            <g>
              <circle
                cx={radius}
                cy={radius}
                r={radius}
                fill="rgba(255, 255, 255, 0.75)"
                stroke={theme.color.white}
                strokeWidth="2"
              />
              <text
                x={radius}
                y={radius * 0.5}
                style={{
                  fontFamily: theme.type.accent.fontFamily,
                  fontSize: theme.type.fontSize[4],
                  fill: theme.color.black,
                  textAnchor: 'middle',
                }}
              >
                {vennData.uxDesign.title}
              </text>
              {vennData.uxDesign.skills.map((d, i) => (
                <text
                  key={d}
                  x={radius}
                  y={radius * 0.65 + i * parseFloat(theme.type.lineHeight[4])}
                  style={{
                    fontFamily: theme.type.default.fontFamily,
                    fontSize: theme.type.fontSize[2],
                    fill: theme.color.black,
                    textAnchor: 'middle',
                  }}
                >
                  {d}
                </text>
              ))}
            </g>

            <g transform={`translate(${radius * 1.6}, 0)`}>
              <circle
                cx={radius}
                cy={radius}
                r={radius}
                fill="rgba(255, 255, 255, 0.75)"
                stroke={theme.color.white}
                strokeWidth="2"
              />
              <text
                x={radius}
                y={radius * 0.5}
                style={{
                  fontFamily: theme.type.accent.fontFamily,
                  fontSize: theme.type.fontSize[4],
                  fill: theme.color.black,
                  textAnchor: 'middle',
                }}
              >
                {vennData.digitalTechnology.title}
              </text>
              {vennData.digitalTechnology.skills.map((d, i) => (
                <text
                  key={d}
                  x={radius}
                  y={radius * 0.65 + i * parseFloat(theme.type.lineHeight[4])}
                  style={{
                    fontFamily: theme.type.default.fontFamily,
                    fontSize: theme.type.fontSize[2],
                    fill: theme.color.black,
                    textAnchor: 'middle',
                  }}
                >
                  {d}
                </text>
              ))}
            </g>

            <g>
              <clipPath id="set1">
                <circle cx={radius} cy={radius} r={255} />
              </clipPath>
              <clipPath id="set2" clipPath="url('#set1')">
                <circle
                  cx={radius}
                  cy={radius}
                  r={255}
                  transform={`translate(${radius * 1.6}, 0)`}
                />
              </clipPath>
              <rect
                clipPath="url('#set2')"
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill={theme.color.pink}
              />
            </g>
          </g>
        </g>

        <g transform={`translate(${width / 2 - radius}, ${radius * 2.5})`}>
          <g transform={`translate(${radius}, 64)`} style={{ display: 'none' }}>
            <text
              x="0"
              y="0"
              style={{
                fontFamily: theme.type.accent.fontFamily,
                fontSize: theme.type.fontSize[6],
                fill: theme.color.black,
                textAnchor: 'middle',
              }}
            >
              UI Engineer Tech Stack
            </text>
          </g>
          <g transform={`translate(0, 96)`}>
            {[5, 4, 3, 2, 1, 0].map((d, i) => (
              <circle
                cx={radius}
                cy={radius}
                r={d !== 0 ? radius * 0.2 * d : 4}
                fill={i === 0 ? 'rgba(255, 255, 255, 0.6)' : 'none'}
                stroke={d !== 0 ? theme.color.white : theme.color.pink}
                strokeWidth="2"
              />
            ))}
            <circle
              cx={radius}
              cy={radius}
              r={3}
              fill="rgba(255, 255, 255, 1)"
            />

            <circle
              cx={radius}
              cy={0}
              r={6}
              fill="rgba(255, 255, 255, 1)"
              stroke={theme.color.pink}
              strokeWidth="2"
            />
            <circle
              cx={radius * 1.75}
              cy={radius * 0.25}
              r={6}
              fill="rgba(255, 255, 255, 1)"
              stroke={theme.color.pink}
              strokeWidth="2"
            />
            <circle
              cx={radius * 2}
              cy={radius}
              r={6}
              fill="rgba(255, 255, 255, 1)"
              stroke={theme.color.pink}
              strokeWidth="2"
            />
            <circle
              cx={radius}
              cy={radius * 2}
              r={6}
              fill="rgba(255, 255, 255, 1)"
              stroke={theme.color.pink}
              strokeWidth="2"
            />
            <circle
              cx={0}
              cy={radius}
              r={6}
              fill="rgba(255, 255, 255, 1)"
              stroke={theme.color.pink}
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </Grid>
  )
}

export default SpiderChart
