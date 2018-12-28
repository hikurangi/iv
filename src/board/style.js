// CSS
export const boardStyle = ({ verticalCells, horizontalCells }) => {
  const cellSizePx = 50
  const gapPx = 10

  const boardWidthPx = getTotalDimension(gapPx, cellSizePx, horizontalCells)
  const boardHeightPx =  getTotalDimension(gapPx, cellSizePx, verticalCells)

  const gridTemplateColumns = getGridItemsCSS(cellSizePx, horizontalCells)
  const gridTemplateRows = getGridItemsCSS(cellSizePx, verticalCells)

  console.log({gridTemplateColumns, gridTemplateRows})
  return {
    height: `${boardHeightPx}px`,
    width: `${boardWidthPx}px`,
    backgroundColor: 'grey',
    display: 'grid',
    gap: `${gapPx}px`,
    gridTemplateColumns,
    gridTemplateRows,
    padding: `${gapPx}px`
  }
}

export const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%'
}

// helpers
function getTotalDimension (gutter, size, cellNumber) {
  return (size * cellNumber) + (gutter * (cellNumber - 1))
}

function getGridItemsCSS (size, cellNumber) {
  let gridItemsCSS = ''

  for (let i = 0; i < cellNumber - 1; i++) {
    if (i === 0) {
      gridItemsCSS += `${size}px`
    }
    
    gridItemsCSS += ' ' + `${size}px`
    
  }

  return gridItemsCSS
}