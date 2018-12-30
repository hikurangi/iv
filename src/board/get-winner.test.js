import getWin from './get-winner'

test('Regular horizontal win condition', () => {
  const board = [[{column:0,row:0,player:null},{column:1,row:0,player:null},{column:2,row:0,player:null},{column:3,row:0,player:null},{column:4,row:0,player:null},{column:5,row:0,player:null},{column:6,row:0,player:null}],[{column:0,row:1,player:null},{column:1,row:1,player:null},{column:2,row:1,player:null},{column:3,row:1,player:null},{column:4,row:1,player:null},{column:5,row:1,player:null},{column:6,row:1,player:null}],[{column:0,row:2,player:null},{column:1,row:2,player:null},{column:2,row:2,player:null},{column:3,row:2,player:null},{column:4,row:2,player:null},{column:5,row:2,player:null},{column:6,row:2,player:null}],[{column:0,row:3,player:null},{column:1,row:3,player:null},{column:2,row:3,player:null},{column:3,row:3,player:null},{column:4,row:3,player:null},{column:5,row:3,player:null},{column:6,row:3,player:null}],[{column:0,row:4,player:1},{column:1,row:4,player:1},{column:2,row:4,player:1},{column:3,row:4,player:null},{column:4,row:4,player:null},{column:5,row:4,player:null},{column:6,row:4,player:null}],[{column:0,row:5,player:2},{column:1,row:5,player:2},{column:2,row:5,player:2},{column:3,row:5,player:2},{column:4,row:5,player:null},{column:5,row:5,player:null},{column:6,row:5,player:null}]]
  const currentPlayer = 1
  const winCondition = 4

  expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
})

test('Fill-in-the-blanks horizontal win condition', () => {
  const board = [[{column:0,row:0,player:null},{column:1,row:0,player:null},{column:2,row:0,player:null},{column:3,row:0,player:null},{column:4,row:0,player:null},{column:5,row:0,player:null},{column:6,row:0,player:null}],[{column:0,row:1,player:null},{column:1,row:1,player:null},{column:2,row:1,player:null},{column:3,row:1,player:null},{column:4,row:1,player:null},{column:5,row:1,player:null},{column:6,row:1,player:null}],[{column:0,row:2,player:null},{column:1,row:2,player:null},{column:2,row:2,player:null},{column:3,row:2,player:null},{column:4,row:2,player:null},{column:5,row:2,player:null},{column:6,row:2,player:null}],[{column:0,row:3,player:null},{column:1,row:3,player:null},{column:2,row:3,player:null},{column:3,row:3,player:null},{column:4,row:3,player:null},{column:5,row:3,player:null},{column:6,row:3,player:null}],[{column:0,row:4,player:1},{column:1,row:4,player:1},{column:2,row:4,player:1},{column:3,row:4,player:null},{column:4,row:4,player:1},{column:5,row:4,player:null},{column:6,row:4,player:null}],[{column:0,row:5,player:2},{column:1,row:5,player:2},{column:2,row:5,player:2},{column:3,row:5,player:2},{column:4,row:5,player:2},{column:5,row:5,player:null},{column:6,row:5,player:null}]]
  const currentPlayer = 1
  const winCondition = 4

  expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
})