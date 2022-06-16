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

const SpiderGraph = () => {
  let ref = useRef(null)
  let [width, setWidth] = useState(720)
  let [height, setHeight] = useState(720)

  useEffect(
    () => {
      if (!ref || !ref.current) return
      const computed = getComputedStyle(ref.current)
      console.log(computed)
      setWidth(parseFloat(computed.width))
      setHeight(parseFloat(computed.height))
    },
    [ref]
  )

  return (
    <Grid ref={ref}>
      <svg width={width} height={width / 2}>
        <rect width="100%" height="100%" fill={theme.color.pink} />
        <g transform={`translate(${width * 0.04}, 0)`}>
          {/* <g transform={`translate(0, 0)`}> */}
          <circle
            cx={width / 4}
            cy={width / 4}
            r={width / 4}
            fill="rgba(255, 255, 255, 0.75)"
            stroke={theme.color.white}
            strokeWidth="2"
          />
          <circle
            cx={width - width / 3}
            cy={width / 4}
            r={width / 4}
            fill="rgba(255, 255, 255, 0.75)"
            stroke={theme.color.white}
            strokeWidth="2"
          />
          <g>
            <clipPath id="clip1">
              <circle cx={width / 4} cy={width / 4} r={width / 4} />
            </clipPath>
            <clipPath id="clip2" clip-path="url('#clip1')">
              <circle cx={width - width / 3} cy={width / 4} r={width / 4} />
            </clipPath>
            <rect
              clip-path="url('#clip2')"
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill={theme.color.pink}
            />
          </g>
        </g>
      </svg>
    </Grid>
  )
}

export default SpiderGraph
