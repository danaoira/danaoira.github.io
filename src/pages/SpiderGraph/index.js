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

const SpiderGraph = () => {
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
      setHeight(Math.min(parsedHeight, parsedWidth / 2))
      if (width / 2 < radius) setRadius(width / 4)
    },
    [ref]
  )

  return (
    <Grid ref={ref}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill={theme.color.pink} />
        <g>
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
      </svg>
    </Grid>
  )
}

export default SpiderGraph
