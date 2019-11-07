import Player from './player';

const Computer = () => {
  const computer = Player('computer');
  const generateAIMove = (board) => {
    let x = 0;
    let y = 0;
    const theBoard = board.getBoard();
    while (theBoard[x][y] !== '*') {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    return Number(`${x}${y}`);
  };

  const makeAIMove = (board) => {
    const move = generateAIMove(board);
    return board.receiveAttack(move);
  };
  return Object.assign(computer, { makeAIMove });
};

export default Computer;
