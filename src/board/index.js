import react, { useState }            from 'react'
import { h, div }                     from 'react-hyperscript-helpers'

import Cell                           from './cell'
import { boardStyle, containerStyle } from './style'

const Board = ({
  verticalCells = 6,
  horizontalCells = 7
}) => {
  // initialize board
  const initialBoard = []
  for (let i = 0; i < verticalCells; i++) {
    const row = []
    for (let j = 0; j < horizontalCells; j++) {
      row.push(null)
    }
    initialBoard.push(row)
  }

  const [board, setBoard] = useState(initialBoard)

  return div({ style: containerStyle },[
    div({ style: boardStyle({ verticalCells, horizontalCells }) }, renderCells(board))
  ])
}

export default Board

function renderCells (board) {
  const row = []

  for (let i = 0; i < board.length; i++) {
    const thisRow = board[i]

    for (let j = 0; j < thisRow.length; j++) {
      row.push(h(Cell, { id: `${i}-${j}` }))
    }
  }

  return row
}