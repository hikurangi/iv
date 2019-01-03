import { any, filter, groupBy, values }                 from 'rambda'
import { getIsConsecutive, getLengthMeetsWinCondition } from '../helpers'

const hasWinningDiagonal = ({ board, currentPlayer, winCondition }) => {
    // filter for diagonals longer than winCondition

  const allDiagonals = getAllDiagonals({ board })
  
  const diagsWithCurrentPlayer = filter(diagonal => {
    const cellsWithPlayer = filter(cell => cell.player === currentPlayer, diagonal)
    return cellsWithPlayer.length >= winCondition
  }, allDiagonals)

  // sort by column
  // either 
  // 1. ascending: columns increment by one and rows increment by one
  // 2. descending: columns increment by one and rows decrement by one

  console.log({ allDiagonals, diagsWithCurrentPlayer })
}

function getAllDiagonals ({ board }) {

  const boardHeight = board.length
  const boardWidth = board[0].length
  const maxLength = Math.max(boardWidth, boardHeight)

  const allDiagonals = []

  const getDiagonalsInOneDirection = ({ ascending }) => {
    for (let i = 0; i <= 2 * (maxLength - 1); ++i) {
      const diagonal = []
  
      for (let y = boardHeight - 1; y >= 0; --y) {
        const x = i - (ascending ? boardHeight - y : y)
  
        if (x >= 0 && x < boardWidth) {
          diagonal.push(board[y][x])
        }
      }
  
      if(diagonal.length > 0) {
        allDiagonals.push(diagonal)
      }
    }
  }

  getDiagonalsInOneDirection({ ascending: true })
  getDiagonalsInOneDirection({ ascending: false })

  return allDiagonals

}

// const exampleDescendingDiagonal = [
//   { "column": 0, "row": 2, "player": 2 },
//   { "column": 1, "row": 3, "player": 2 },
//   { "column": 2, "row": 4, "player": 2 },
//   { "column": 3, "row": 5, "player": 2 }
// ]

// const exampleAscendingDiagonal = [
//   { "column": 0, "row": 5, "player": 2 },
//   { "column": 1, "row": 4, "player": 2 },
//   { "column": 2, "row": 3, "player": 2 },
//   { "column": 3, "row": 2, "player": 2 },
//   { "column": 4, "row": 1, "player": null },
//   { "column": 5, "row": 0, "player": null }
// ]

export default hasWinningDiagonal