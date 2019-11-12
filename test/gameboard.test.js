import GameBoard from '../src/gameboard';

describe('testing gameBoard module', () => {
  const board = GameBoard();
  board.createShips();
  test('receiveAttack does not hit on a ship', () => {
    expect(board.receiveAttack(55)).toBeFalsy();
    expect(board.getBoard()[Math.round(55 / 10)][Math.round(55 % 10)]).toBe('*');
  });

  test('receiveAttack hits on a ship', () => {
    expect(board.receiveAttack(22)).toBeTruthy();
    expect(board.getBoard()[Math.round(22 / 10)][Math.round(22 % 10)]).toBe('X');
  });
  test('Not all ships have sunk', () => {
    expect(board.IsAllShipsSunk()).toBeFalsy();
  });
});
