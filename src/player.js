import GameBoard from './gameboard';

const Player = (name) => {
  const getName = () => name;
  const makeMove = (move, board) => board.receiveAttack(move);
  return { makeMove, getName };
};

export default Player;
