import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Board = styled.div`
  display: grid;
  min-height: 100vh;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Square = styled.div`
  flex-wrap: wrap;
  flex-basis: ${(props) => props.size}px;
`

const TicTacToe = () => {
  const ref = useRef(null)
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])
  const [squareSize, setSquareSize] = useState(null)

  useEffect(() => {
    if (!ref || !ref.current) return
    const computed = getComputedStyle(ref.current)
    const parsedWidth = parseFloat(computed.width)
    const parsedHeight = parseFloat(computed.height)
    const minSize = Math.min(parsedWidth / 3, parsedHeight / 3)
    setSquareSize(minSize)
  }, [ref])

  return (
    <Board ref={ref}>
      {board.map((row) => {
        return row.map((item) => {
          return <Square size={squareSize}>{item ? item : 'x'}</Square>
        })
      })}
    </Board>
  )
}

TicTacToe.propTypes = {}

export default TicTacToe
