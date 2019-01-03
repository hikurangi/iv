const getNextPlayer = ({ currentPlayer }) => {
  return currentPlayer === 1 ? 2 : 1
}

// initial state
const getInitialBoard = ({ verticalCells, horizontalCells }) => {
  const initialBoard = []

  for (let i = 0; i < verticalCells; i++) {
    const row = []

    for (let j = 0; j < horizontalCells; j++) {
      row.push({ column: j, row: i, player: null })
    }

    initialBoard.push(row)
  }

  return initialBoard
}

const randomizeFirstPlayer = () => {
  return Math.floor(Math.random() * 2) + 1
} 

module.exports = {
  getInitialBoard,
  getNextPlayer,
  randomizeFirstPlayer,
}