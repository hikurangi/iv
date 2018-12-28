import { h, div } from 'react-hyperscript-helpers'

const Cell = ({ player, column, row, handleClick }) => {
  let cellColour = 'black'

  if (player === 1) {
    cellColour = 'red'
  }

  if (player === 2) {
    cellColour = 'yellow'
  }

  return div({
    'data-column': column,
    'data-row': row,
    onClick: handleClick(column),
    style: {
      borderRadius: '100%',
      backgroundColor: cellColour || 'black'
    }
  })
} 

export default Cell