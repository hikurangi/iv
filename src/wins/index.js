import hasWinningColumn   from './column'
import hasWinningRow      from './row'
import hasWinningDiagonal from './diagonal'

const getWin = ({
  board,
  currentPlayer,
  winCondition
}) => {
  const isWinner = hasWinningRow({ board, currentPlayer, winCondition })
    || hasWinningColumn({ board, currentPlayer, winCondition })
    || hasWinningDiagonal({ board, currentPlayer, winCondition })
  
  return isWinner  
}

export default getWin