import { filter, groupBy, values }                      from 'rambda'
import { getIsConsecutive, getLengthMeetsWinCondition } from '../helpers'

const hasWinningDiagonal = ({ currentPlayerCells, winCondition }) => {
  // get all diagonals going up left-right
  
  // get all diagonals longer than winCondition

  const byRow = groupBy(cell => cell.row, currentPlayerCells)
  const winCandidateRows = values(filter(row => row.length >= winCondition, byRow))
}

export default hasWinningDiagonal