export const getInitialBoard = ({ verticalCells, horizontalCells }) => {
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

export const randomizeFirstPlayer = () => {
  return Math.floor(Math.random() * 2) + 1
} 