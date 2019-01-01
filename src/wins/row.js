import { any, filter, groupBy, path, values }           from 'rambda'
import { getIsConsecutive, getLengthMeetsWinCondition } from '../helpers'

const hasWinningRow = ({ currentPlayerCells, winCondition }) => {
  
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

export default hasWinningRow