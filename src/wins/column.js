import { any, flatten, groupBy, pipe, values } from 'rambda'

const hasWinningColumn = ({ board, currentPlayer, winCondition }) => {
  
  const getColumns = pipe(
    flatten,
    groupBy(cell => cell.column),
    values
  )
  
  const boardByColumns = getColumns(board)
  
  // this code is a candidate for abstraction
  return any(column => {
    let consecutives = 0
    
    for (let i = 0; i < column.length; i++) {
      const currentCell = column[i]

      if (currentCell.player === currentPlayer) {
        consecutives++
      } else {
        consecutives = 0
      }

      if (consecutives >= winCondition) {
        return true
      }
    }

  }, boardByColumns)
}

export default hasWinningColumn