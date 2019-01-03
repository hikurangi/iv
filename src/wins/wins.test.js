import getWin               from '../wins'
import fixtures             from '../../__test__/fixtures'

test('Player 1 wins with horizontal connect', () => {
  const board = fixtures.horizontalWinBoard
  const currentPlayer = 1
  const winCondition = 4
  
  expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
})

test('Player 1 does not win with non-contiguous horizontal \'connect\'', () => {
  const board = fixtures.nonConsecutiveFalsePositiveHorizontal
  const currentPlayer = 1
  const winCondition = 4
  
  expect(getWin({ board, currentPlayer, winCondition })).toEqual(false)
})

test('Player 1 wins with vertical connect', () => {
  const board = fixtures.verticalWinBoard  
  const currentPlayer = 1
  const winCondition = 4

  expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
})

test('Player 1 wins with ascending left-right connect', () => {
  const board = fixtures.ascendingDiagonalWinBoard 
  const currentPlayer = 1
  const winCondition = 4

  expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
})

test('Player 1 does not win with ascending non-contiguous left-to-right four', () => {
  const board = fixtures.ascendingDiagonalIncompleteBoard 
  const currentPlayer = 1
  const winCondition = 4

  expect(getWin({ board, currentPlayer, winCondition })).toEqual(false)
})

test('Player 1 wins with descending left-right connect', () => {
  const board = fixtures.descendingDiagonalWinBoard 
  const currentPlayer = 1
  const winCondition = 4

  expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
})

test('Player 1 does not win with descending non-contiguous left-right connect', () => {
  const board = fixtures.descendingDiagonalIncompleteBoard 
  const currentPlayer = 1
  const winCondition = 4

  expect(getWin({ board, currentPlayer, winCondition })).toEqual(false)
})