import { filter, flatten, pluck } from 'rambda'

const updateBoard = ({
  column,
  board,
  setBoard,
  currentPlayer
}) => {
  // (board should build bottom to top for simplicity?)

  // 1. get all items in the column
  const targetColumn = getColumn({ column, board })
  const freeCellsInColumn = filter(cell => cell.player === null, targetColumn) 

  // 2. check whether the column is full
  if (freeCellsInColumn.length === 0) {
    return toast.info('That column is full!')
  }

  const targetCellRow = getLowestFreeCell({ freeCellsInColumn })

  // 3. put a token from the current player at the lowest unoccupied point in the column
  const updatedBoard = board
  updatedBoard[targetCellRow][column].player = currentPlayer

  setBoard(updatedBoard)

}

// helpers
function getColumn ({ column, board }) {
  return filter(cell => cell.column === column, flatten(board))
}

function getLowestFreeCell ({ freeCellsInColumn }) {
  const rowValues = pluck('row', freeCellsInColumn)
  const lowestCellRow = Math.max(...rowValues) // rambda.max only accepts two values at a time
  return lowestCellRow
}

export default updateBoard