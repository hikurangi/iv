import getWin from './get-win'
import { getIsConsecutive } from './helpers'

test.skip('Regular horizontal win condition', () => {
  const board = [[{column:0,row:0,player:null},{column:1,row:0,player:null},{column:2,row:0,player:null},{column:3,row:0,player:null},{column:4,row:0,player:null},{column:5,row:0,player:null},{column:6,row:0,player:null}],[{column:0,row:1,player:null},{column:1,row:1,player:null},{column:2,row:1,player:null},{column:3,row:1,player:null},{column:4,row:1,player:null},{column:5,row:1,player:null},{column:6,row:1,player:null}],[{column:0,row:2,player:null},{column:1,row:2,player:null},{column:2,row:2,player:null},{column:3,row:2,player:null},{column:4,row:2,player:null},{column:5,row:2,player:null},{column:6,row:2,player:null}],[{column:0,row:3,player:null},{column:1,row:3,player:null},{column:2,row:3,player:null},{column:3,row:3,player:null},{column:4,row:3,player:null},{column:5,row:3,player:null},{column:6,row:3,player:null}],[{column:0,row:4,player:1},{column:1,row:4,player:1},{column:2,row:4,player:1},{column:3,row:4,player:null},{column:4,row:4,player:null},{column:5,row:4,player:null},{column:6,row:4,player:null}],[{column:0,row:5,player:2},{column:1,row:5,player:2},{column:2,row:5,player:2},{column:3,row:5,player:2},{column:4,row:5,player:null},{column:5,row:5,player:null},{column:6,row:5,player:null}]]
  const currentPlayer = 1
  const winCondition = 4

  console.log(' ################### getWin ', getWin({ board, currentPlayer, winCondition }))
  expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
})

// test('Fill-in-the-blanks horizontal win condition', () => {
//   const board = [[{column:0,row:0,player:null},{column:1,row:0,player:null},{column:2,row:0,player:null},{column:3,row:0,player:null},{column:4,row:0,player:null},{column:5,row:0,player:null},{column:6,row:0,player:null}],[{column:0,row:1,player:null},{column:1,row:1,player:null},{column:2,row:1,player:null},{column:3,row:1,player:null},{column:4,row:1,player:null},{column:5,row:1,player:null},{column:6,row:1,player:null}],[{column:0,row:2,player:null},{column:1,row:2,player:null},{column:2,row:2,player:null},{column:3,row:2,player:null},{column:4,row:2,player:null},{column:5,row:2,player:null},{column:6,row:2,player:null}],[{column:0,row:3,player:null},{column:1,row:3,player:null},{column:2,row:3,player:null},{column:3,row:3,player:null},{column:4,row:3,player:null},{column:5,row:3,player:null},{column:6,row:3,player:null}],[{column:0,row:4,player:1},{column:1,row:4,player:1},{column:2,row:4,player:1},{column:3,row:4,player:null},{column:4,row:4,player:1},{column:5,row:4,player:null},{column:6,row:4,player:null}],[{column:0,row:5,player:2},{column:1,row:5,player:2},{column:2,row:5,player:2},{column:3,row:5,player:2},{column:4,row:5,player:2},{column:5,row:5,player:null},{column:6,row:5,player:null}]]
//   const currentPlayer = 1
//   const winCondition = 4

//   expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
// })

test('Array of consecutive numbers', () => {
  const consecutive = [1, 2, 3, 4]
  expect(getIsConsecutive(...consecutive)).toEqual(true)
})

test('Array of non-consecutive numbers', () => {
  const consecutive = [1, 2, 4, 5]
  expect(getIsConsecutive(...consecutive)).toEqual(false)
})

test('Array with undefined', () => {
  const consecutive = [undefined, 0]
  expect(getIsConsecutive(...consecutive)).toEqual(false)
})