import getWin               from './get-win'
import { getIsConsecutive } from './helpers'
import board                from '../../__test__/board'

test('Player 1 wins', () => {
  const currentPlayer = 1
  const winCondition = 4

  expect(getWin({ board, currentPlayer, winCondition })).toEqual(true)
})

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