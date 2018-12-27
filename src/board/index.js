import react, { useState } from 'react'
import { div }             from 'react-hyperscript-helpers'

const Board = ({
  height = 6,
  width = 7
}) => {
  // initialize board
  const initialBoard = []
  for (let i = 0; i < height; i++) {
    const row = []
    for (let j = 0; j < height; j++) {
      row.push(null)
    }
    initialBoard.push(row)
  }

  const [board, setBoard] = useState(initialBoard)

  console.log({board, initialBoard, setBoard})
  return div(`height: ${height}, width: ${width}`)
}

export default Board