import { h, div } from 'react-hyperscript-helpers'

const Cell = ({ player, column, row, handleClick }) => {
  let cellColour // danger zone
  
  if (player === 1) {
    cellColour = 'red'
  }
  
  if (player === 2) {
    cellColour = 'yellow'
  }

  return div({ // TODO: add fela or similar CSS system to implement hover
    onClick: handleClick(column),
    style: {
      borderRadius: '100%',
      backgroundColor: cellColour || 'black'
    }
  })
} 

export default Cell