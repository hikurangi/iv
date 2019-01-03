import { any } from 'rambda'

const hasWinningRow = ({ board, currentPlayer, winCondition }) => {
  return any(row => {
    let consecutives = 0
    
    for (let i = 0; i < row.length; i++) {
      const currentCell = row[i]

      if (currentCell.player === currentPlayer) {
        consecutives++
      } else {
        consecutives = 0
      }

      if (consecutives >= winCondition) {
        return true
      }
    }

  }, board)
}

export default hasWinningRow