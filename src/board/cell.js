import { h, div } from 'react-hyperscript-helpers'

const Cell = ({ player, id }) => {
  let cellColour = 'black'

  if (player === 1) {
    cellColour = 'red'
  }

  if (player === 2) {
    cellColour = 'yellow'
  }

  return div({
    id,
    style: {
      borderRadius: '100%',
      backgroundColor: cellColour || 'black'
    }
  })
} 

export default Cell