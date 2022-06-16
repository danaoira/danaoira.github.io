import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
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
      setWidth(computed.width)
      setHeight(computed.height)
    },
    [ref]
  )

  console.log({ width, height })
  return (
    <Grid ref={ref}>
      <svg width={width} height={height}>
        <rect width="100%" height="100%" fill={theme.color.pink} />
      </svg>
    </Grid>
  )
}

export default SpiderGraph
