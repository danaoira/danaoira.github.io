import { scaleQuantile } from 'd3-scale'
import { lineRadial, pointRadial } from 'd3-shape'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../utils'
import VennDiagram from './VennDiagram'

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

const labelTextAnchor = scaleQuantile()
  .domain([-256, 0, 256])
  .range(['end', 'middle', 'start'])

const labelAlignmentBaseline = scaleQuantile()
  .domain([-256, 0, 256])
  .range(['baseline', 'middle', 'hanging'])

const SpiderChart = () => {
  let ref = useRef(null)
  let [width, setWidth] = useState(720)
  let [height, setHeight] = useState(720)
  let [radius, setRadius] = useState(256)
  const data = [
    { year: '2018', title: 'JavaScript', value: 3 },
    { year: '2018', title: 'React', value: 3 },
    { year: '2018', title: 'Redux', value: 2 },
    { year: '2018', title: 'D3', value: 3 },
    { year: '2018', title: 'Jest', value: 1 },
    { year: '2018', title: 'Git', value: 4 },
    { year: '2018', title: 'Figma', value: 1 },
    { year: '2018', title: 'HTML/CSS', value: 4 },
  ]

  const radialLine = data.map((d, i) => [
    (Math.PI / 4) * i,
    d.value * radius * 0.2,
  ])

  const radial = lineRadial()(radialLine)

  useEffect(() => {
    if (!ref || !ref.current) return
    const computed = getComputedStyle(ref.current)
    const parsedWidth = parseFloat(computed.width)
    const parsedHeight = parseFloat(computed.height)
    setWidth(parsedWidth)
    setHeight(Math.min(parsedHeight, height))
    if (width / 2 < radius) setRadius(width / 4)
  }, [ref])

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
        <VennDiagram radius={radius} width={width} />

        <g transform={`translate(${width / 2 - radius}, ${radius * 2.5})`}>
          <g transform={`translate(${radius}, 50)`}>
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
                key={d}
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

            <path
              d={radial}
              fill="rgba(255, 255, 255, 0.75)"
              transform={`translate(${radius}, ${radius})`}
            />

            {data.map((d, i) => {
              const [cx, cy] = pointRadial((Math.PI / 4) * i, 5 * radius * 0.2)
              return (
                <g key={d.title} transform={`translate(${radius}, ${radius})`}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={6}
                    fill="rgba(255, 255, 255, 1)"
                    stroke={theme.color.pink}
                    strokeWidth="2"
                  />
                  <text
                    x={cx * 1.05}
                    y={cy * 1.05}
                    style={{
                      fontFamily: theme.type.default.fontFamily,
                      fontSize: theme.type.fontSize[2],
                      fill: theme.color.black,
                      textAnchor: labelTextAnchor(Math.round(cx)),
                      alignmentBaseline: labelAlignmentBaseline(Math.round(cy)),
                    }}
                  >
                    {d.title}
                  </text>
                </g>
              )
            })}
          </g>
        </g>
      </svg>
    </Grid>
  )
}

export default SpiderChart
