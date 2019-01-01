import { all } from 'rambda'

function getNextPlayer ({ currentPlayer }) {
  return currentPlayer === 1 ? 2 : 1
}

// initial state
function getInitialBoard ({ verticalCells, horizontalCells }) {
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

function randomizeFirstPlayer () {
  return Math.floor(Math.random() * 2) + 1
} 

function getIsConsecutive (...consecutives) {
  return all((number, i) => {
    if (i === 0) {
      return true
    }

    return number === consecutives[i - 1] + 1
  }, consecutives)
}

module.exports = {
  getInitialBoard,
  getNextPlayer,
  getIsConsecutive,
  randomizeFirstPlayer,
}