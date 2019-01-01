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
} from 'rambda'

import { getIsConsecutive } from './helpers'

// function fires every time board is updated
// checks if the current player has won
const getWin = ({
  board,
  currentPlayer,
  winCondition = 4
}) => {
  // console.log({ board })
  // 1. get all cells from each player
  const flattened = flatten(board) // board doesn't need to be a 2d array
  const currentPlayerCells = filter(cell => cell.player === currentPlayer, flattened)

  // check if winCondition amount of cells are consecutive
  // 1. horizontally
  const isWinner = hasWinningRow({ currentPlayer, currentPlayerCells, winCondition })
    || hasWinningColumn({ currentPlayerCells, winCondition })
    || hasWinningDiagonal({ currentPlayerCells, winCondition })
  
  return isWinner  
}

function hasWinningRow ({ currentPlayer, currentPlayerCells, winCondition }) {
  
  const byRow = groupBy(cell => cell.row, currentPlayerCells)
  const winCandidateRows = values(filter(row => row.length >= winCondition, byRow))

  function checkRows () {
    
    return any(row => {
      let consecutives = []
      
      for (let i = 0; i < row.length; i++) {
        const thisColumn = row[i].column
        const prevColumn = path(`${i - 1}.column`, row)
        
        // a single number is always consecutive, the first one will always be a single number
        if (i === 0) {
          consecutives = [thisColumn]
          continue
        }
        
        if (getIsConsecutive(prevColumn, thisColumn)) {
          consecutives.push(thisColumn)

          if (getLengthMeetsWinCondition({ consecutives, winCondition })) {
            return true
          }
          continue
        }
        
        if (!getIsConsecutive(...consecutives) || i === row.length) {
          consecutives = []
          continue
        }
        
        if (getLengthMeetsWinCondition({ consecutives, winCondition })) {
          return true
        }

      }
    }, winCandidateRows)
  }
  
  return checkRows()
}

function getLengthMeetsWinCondition ({ consecutives, winCondition }) {
  return consecutives.length === winCondition
}

function hasWinningColumn ({ currentPlayerCells, winCondition }) {
  return false
  // const byColumn = groupBy(cell => cell.column, currentPlayerCells)
  // const winCandidateColumns = values(filter(column => column.length >= winCondition, byColumn))

  // if (winCandidateColumns.length === 0) {
  //   return false
  // }
  // // iterate through all rows
  // const hasWinner = any(currentColumn => {
  //   return all((cell, i) => {
  //     const { row } = cell
    
  //     if (i === 0) {
  //       return true
  //     }
    
  //     if (row === currentColumn[i - 1].row + 1) {
  //       return true
  //     }
    
  //     return false
    
  //   }, currentColumn)
  // }, winCandidateColumns)
  // // check if any of these are consecutive
  // return hasWinner
}

function hasWinningDiagonal ({ currentPlayerCells, winCondition }) {
  return false
}

export default getWin