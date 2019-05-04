import react, { useState }                        from 'react'
import { h, div }                                 from 'react-hyperscript-helpers'
import { toast }                                  from 'react-toastify'
import { path }                                   from 'rambda'
import {
  getInitialBoard,
  getNextPlayer,
  randomizeFirstPlayer,
}                                                 from '../helpers'
import updateBoard                                from './update-board'
import getWin                                     from '../wins'

import Cell                                       from './cell'
import { boardStyle, containerStyle, hideCursor } from './style'

// TODO:

// 0. add custom settings / default
// 1. board as 1d array
// 2. Mouse cursor = counter
// 2. animated counter drop
// 3. dynamic player numbers w randomized colours
// 4. dynamic board size
// 5. make it look not horrible
// 6. move history / level fact base
// 7. 3D

// gravity flip (rotate 90 degrees every n turns)
// useEffect async hooks ?

const Board = ({
  verticalCells = 6,
  horizontalCells = 7
}) => {
  // state
  const [currentPlayer, setPlayer] = useState(randomizeFirstPlayer())

  const [board, setBoard] = useState(() => {
    const initialState = getInitialBoard({ verticalCells, horizontalCells })
    toast.info(`The game has begun. It's player ${currentPlayer}'s turn!`) // TODO: give toast player colour
    return initialState
  })

  // hideCursor(true)

  const handleClick = column => e => {
    const nextPlayer = getNextPlayer({ currentPlayer })
    
    updateBoard({
      column,
      board,
      currentPlayer,
      setBoard
    })
    
    if (getWin({ board, currentPlayer, winCondition: 4 })) {
      toast.info(`Player ${currentPlayer} wins!`)
      return setBoard(getInitialBoard({ verticalCells, horizontalCells }))
    }

    setPlayer(nextPlayer)
    
    toast.info(`Player ${nextPlayer}'s turn!`)
  }


  return div({ style: containerStyle },[
    div(
      { style: boardStyle({ verticalCells, horizontalCells }) },
      renderCells({ board, handleClick })
    )
  ])
}

export default Board

function renderCells ({ handleClick, board }) {
  const row = []

  for (let i = 0; i < board.length; i++) {
    const thisRow = board[i]

    for (let j = 0; j < thisRow.length; j++) {
      const player = path(`${i}.${j}.player`, board)
      row.push(h(Cell, { player, column: j, row: i, handleClick }))
    }
  }

  return row
}