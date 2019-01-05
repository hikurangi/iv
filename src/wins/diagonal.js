import { any, filter, groupBy, max, values } from 'rambda'
import arrayHasWins from './row'

const hasWinningDiagonal = ({ board, currentPlayer, winCondition }) => {
  // filter for diagonals longer than winCondition

  const allDiagonals = getAllDiagonals({ board })
  const allWinCandidateDiagonals = filter(diag => diag.length >= winCondition, allDiagonals)
  
  return arrayHasWins({
    board: allWinCandidateDiagonals,
    currentPlayer,
    winCondition
  })
}

function getAllDiagonals ({ board }) {

  const boardHeight = board.length
  const boardWidth = board[0].length

  // the maximum length of a diagonal for a given rectangle
  // is the same as the longest side of that rectangle
  const maxLength = max(boardWidth, boardHeight)

  
  const getDiagonalsInOneDirection = ({ ascending }) => {
    const diagonals = []

    for (let i = 0; i <= 2 * (maxLength - 1); ++i) {
      const diagonal = []
  
      for (let y = boardHeight - 1; y >= 0; --y) {
        const x = i - (ascending ? boardHeight - y : y)
  
        if (x >= 0 && x < boardWidth) {
          diagonal.push(board[y][x])
        }
      }
  
      if(diagonal.length > 0) {
        diagonals.push(diagonal)
      }
    }

    return diagonals
  }

  const ascending = getDiagonalsInOneDirection({ ascending: true })
  const descending = getDiagonalsInOneDirection({ ascending: false })

  return [...ascending, ...descending]

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