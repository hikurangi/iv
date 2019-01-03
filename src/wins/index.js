import {
  all,
  any,
  filter,
  flatten,
  groupBy,
  map,
  path,
  pipe,
  pluck,
  reduce,
  values
}                           from 'rambda'
import { getIsConsecutive } from '../helpers'
import hasWinningColumn     from './column'
import hasWinningRow        from './row'
import hasWinningDiagonal   from './diagonal'

// function fires every time board is updated
// checks if the current player has won
const getWin = ({
  board,
  currentPlayer,
  winCondition = 4
}) => {
  console.log({ board })
  // 1. get all cells from each player
  const flattened = flatten(board) // board doesn't need to be a 2d array
  const currentPlayerCells = filter(cell => cell.player === currentPlayer, flattened)

  // check if winCondition amount of cells are consecutive
  // 1. horizontally
  const isWinner = hasWinningRow({ currentPlayerCells, winCondition })
    || hasWinningColumn({ currentPlayerCells, winCondition })
    || hasWinningDiagonal({ board, currentPlayer, winCondition })
  
  return isWinner  
}

export default getWin