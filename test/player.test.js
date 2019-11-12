import Player from '../src/player';

test('player name is correctly returned', () => {
  const player = Player('lucy');
  expect(player.getName()).toBe('lucy');
});
