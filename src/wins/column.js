import { any, filter, groupBy, path, values }           from 'rambda'
import { getIsConsecutive, getLengthMeetsWinCondition } from '../helpers'

const hasWinningColumn = ({ currentPlayerCells, winCondition }) => {
  
  const byColumn = groupBy(cell => cell.column, currentPlayerCells)
  const winCandidateColumns = values(filter(column => column.length >= winCondition, byColumn))

  function checkColumns () {
    
    return any(column => {
      let consecutives = []
      
      for (let i = 0; i < column.length; i++) {
        const thisRow = column[i].row
        const prevRow = path(`${i - 1}.row`, column)
        
        // a single number is always consecutive, the first one will always be a single number
        if (i === 0) {
          consecutives = [thisRow]
          continue
        }
        
        if (getIsConsecutive(prevRow, thisRow)) {
          consecutives.push(thisRow)

          if (getLengthMeetsWinCondition({ consecutives, winCondition })) {
            return true
          }
          continue
        }
        
        if (!getIsConsecutive(...consecutives) || i === column.length) {
          consecutives = []
          continue
        }
        
        if (getLengthMeetsWinCondition({ consecutives, winCondition })) {
          return true
        }

      }
    }, winCandidateColumns)
  }
  
  return checkColumns()
}

export default hasWinningColumn