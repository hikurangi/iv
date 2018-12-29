import react, { useState }                       from 'react'
import { h, div }                                from 'react-hyperscript-helpers'
import { toast }                                 from 'react-toastify'
import { filter, flatten, path, pluck }          from 'rambda'

import { getInitialBoard, randomizeFirstPlayer } from './initial-state'
import Cell                                      from './cell'

import { boardStyle, containerStyle }            from './style'

// TODO:
// 1. win conditions (dynamic, connect 10)
// 2. animated counter drop
// 3. dynamic player numbers w randomized colours
// 4. dynamic board size
// 5. make it look not horrible
// 6. move history
// 7. 3D

const Board = ({
  verticalCells = 6,
  horizontalCells = 7
}) => {
  // state
  const [currentPlayer, setPlayer] = useState(randomizeFirstPlayer())

  const [board, setBoard] = useState(() => {
    const initialState = getInitialBoard({ verticalCells, horizontalCells })
    toast.info(`The game has begun. It's player ${currentPlayer}'s turn!`) // give toast player colour
    return initialState
  })

  const handleClick = column => e => {
    const nextPlayer = getNextPlayer({ currentPlayer })
    updateBoard({
      column,
      board,
      setPlayer,
      verticalCells,
      horizontalCells,
      currentPlayer,
      setBoard
    })
    setPlayer(nextPlayer)
    toast.info(`Player ${nextPlayer}'s Turn!`)
  }


  return div({ style: containerStyle },[
    div({ style: boardStyle({ verticalCells, horizontalCells }) }, renderCells({ board, handleClick }))
  ])
}

export default Board

// helpers
function renderCells ({ handleClick, board }) {
  const row = []

  for (let i = 0; i < board.length; i++) {
    const thisRow = board[i]

    for (let j = 0; j < thisRow.length; j++) {
      const player = path(`${i}.${j}.player`, board)
      row.push(h(Cell, { player, column: j, row: i, handleClick }))
    }
  }

  return row
}

function updateBoard ({
  column,
  board,
  verticalCells,
  horizontalCells,
  setBoard,
  setPlayer,
  currentPlayer
}) {
  // (board should build bottom to top for simplicity!)

  // 1. get all items in the column (rambda?)
  const targetColumn = getColumn({ column, board })
  const freeCellsInColumn = filter(cell => cell.player === null, targetColumn) 

  // 2. check that the column isn't full
  if (freeCellsInColumn.length === 0) {
    return toast.info('That column is full!')
  }

  const targetCellRow = getLowestFreeCell({ freeCellsInColumn })

  // 3. put a token from the current player at the lowest unoccupied point in the column
  const updatedBoard = board
  updatedBoard[targetCellRow][column].player = currentPlayer
  setBoard(updatedBoard)

}

function getColumn ({ column, board }) {
  return filter(cell => cell.column === column, flatten(board))
}

function getLowestFreeCell ({ freeCellsInColumn }) {
  const rowValues = pluck('row', freeCellsInColumn)
  const lowestCellRow = Math.max(...rowValues) // rambda.max only accepts two values at a time
  return lowestCellRow
}

function getNextPlayer ({ currentPlayer }) {
  return currentPlayer === 1 ? 2 : 1
}