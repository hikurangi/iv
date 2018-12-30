import {
  all,
  any,
  filter,
  flatten,
  groupBy,
  map,
  pipe,
  pluck,
  reduce,
  values
} from 'rambda'

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
  const isWinner = hasWinningRow({ currentPlayer, currentPlayerCells, winCondition })
    || hasWinningColumn({ currentPlayerCells, winCondition })
    || hasWinningDiagonal({ currentPlayerCells, winCondition })
  
  return isWinner  
}

function hasWinningRow ({ currentPlayer, currentPlayerCells, winCondition }) {
  const byRow = groupBy(cell => cell.row, currentPlayerCells)
  const getWinCandidateRows = pipe(
    filter(row => row.length >= winCondition),
    values,
    map(pluck('column'))
  )

  const winCandidateRows = getWinCandidateRows(byRow)
  console.log({ winCandidateRows, currentPlayer })
  
  if (winCandidateRows.length === 0) {
    return false
  }
  // iterate through all rows
  // and check that in the row there is a stretch of consecutive numbers
  const hasWinner = any(currentRow => {
    let consecutiveColumns = [] 
    console.log({consecutiveColumns}, 'before loop')
    for (let i = 0; i < currentRow.length; i++) {
      if (i === 0) {
        console.log('cCs reset!')
        consecutiveColumns = []
      }
      const thisColumn = currentRow[i]
      const previousColumn = currentRow[i - 1] // BUG: currently undefined for second item
      // if there are four consecutive columns of the same player, this row is a winner
      if (consecutiveColumns.length === 4) {
        console.log({currentPlayer}, 'wins!')
        return true // return consecutiveColumns
      }

      // if we get to the end of the row with no wins, exit false
      if (i === currentRow.length - 1) {
        console.log({currentRow}, 'contains no wins')
        return false
      }

      if (consecutiveColumns.length === 0) {
        console.log('fresh', { currentRow, i, currentPlayer, thisColumn, previousColumn, consecutiveColumns })
        consecutiveColumns.push(thisColumn)
        continue
      }

      // if we've just started counting consecutive columns or this IS a consecutive column,
      // add this column to the consecutive column counter (say that ten times fast)
      if (thisColumn === previousColumn + 1) {
        console.log('consecutive', { currentRow, i, currentPlayer, thisColumn, previousColumn, consecutiveColumns })
        consecutiveColumns.push(thisColumn)
      }
      
      // if this and the last column are not consecutive
      if (thisColumn !== previousColumn + 1) {
        console.log('not consecutive', { currentRow, i, currentPlayer, thisColumn, previousColumn, consecutiveColumns })
        consecutiveColumns = [] // reset consecutive counter
        console.log({ consecutiveColumns }, 'after reset')        
      }

      continue
    }
  }, winCandidateRows)
  // check if any of these are consecutive
  console.log({hasWinner})
  return hasWinner
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