import Player from './player';

const Computer = () => {
  const computer = Player('computer');
  const generateAIMove = (board) => {
    let x = 0;
    let y = 0;
    while (board[x][y] !== ' ') {
      x = Math.floor((Math.random() * 10) + 1);
      y = Math.floor((Math.random() * 10) + 1);
    }
    return Number(`${x} + ${y}`);
  };

  const makeAIMove = (board) => {
    const move = generateAIMove(board);
    return computer.makeMove(move, board);
  };

  computer.makeMove = makeAIMove;
  return computer;
};

export default Computer;
