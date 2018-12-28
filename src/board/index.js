import react, { useState }            from 'react'
import { h, div }                     from 'react-hyperscript-helpers'

import Cell                           from './cell'
import { boardStyle, containerStyle } from './style'

const Board = ({
  verticalCells = 6,
  horizontalCells = 7
}) => {

  const [board, setBoard] = useState(() => {
    const initialState = getInitialState({ verticalCells, horizontalCells })
    return initialState
  })

  return div({ style: containerStyle },[
    div({ style: boardStyle({ verticalCells, horizontalCells }) }, renderCells(board))
  ])
}

export default Board

// helpers
function renderCells (board) {
  const row = []

  for (let i = 0; i < board.length; i++) {
    const thisRow = board[i]

    for (let j = 0; j < thisRow.length; j++) {
      row.push(h(Cell, { column: j, row: i }))
    }
  }

  return row
}

function getInitialState ({ verticalCells, horizontalCells }) {
  const initialBoard = []
  for (let i = 0; i < verticalCells; i++) {
    const row = []
    for (let j = 0; j < horizontalCells; j++) {
      row.push(null)
    }
    initialBoard.push(row)
  }

  return initialBoard
}