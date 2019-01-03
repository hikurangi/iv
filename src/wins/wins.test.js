import getWin               from '../wins'
import { getIsConsecutive } from '../helpers'
import fixtures             from '../../__test__/fixtures'

test('Player 1 wins with horizontal connect', () => {
  const board = fixtures.horizontalWinBoard
  const currentPlayer = 1
  const winCondition = 4
  
  expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
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

test('Accurately get valid array of consecutive numbers', () => {
  const consecutive = [1, 2, 3, 4]
  expect(getIsConsecutive(...consecutive)).toEqual(true)
})

test('Accurately get valid array of non-consecutive numbers', () => {
  const consecutive = [1, 2, 4, 5]
  expect(getIsConsecutive(...consecutive)).toEqual(false)
})

test('Accurately get array with invalid contents', () => {
  const consecutive = [undefined, 0]
  expect(getIsConsecutive(...consecutive)).toEqual(false)
})