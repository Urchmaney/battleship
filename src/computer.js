import Player from './player';

const Computer = () => {
  const hits = [];
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
    let move = null;
    let last = null;
    if (hits.length > 0) {
      last = hits[hits.length - 1];
      if (board.getBoard()[Math.floor(last / 10)][last % 10] === '.') {
        hits.pop();
      }
      if (hits.length > 0) {
        last = hits[hits.length - 1];
        if (board.getBoard()[Math.floor(last / 10)][last % 10] === 'X') {
          if (!hits.includes(last + 1) && ((last % 10) < 9) && (board.getBoard()[Math.floor((last + 1) / 10)][(last + 1) % 10] === '*')) {
            move = last + 1;
          } else if (!hits.includes(last - 1) && ((last % 10) > 0) && (board.getBoard()[Math.floor((last - 1) / 10)][(last - 1) % 10] === '*')) {
            move = last - 1;
          } else if (!hits.includes(last + 10) && ((last / 10) < 9) && (board.getBoard()[Math.floor((last + 10) / 10)][(last + 10) % 10] === '*')) {
            move = last + 10;
          } else if (!hits.includes(last - 10) && ((last / 10) > 0) && (board.getBoard()[Math.floor((last - 10) / 10)][(last - 10) % 10] === '*')) {
            move = last - 10;
          } else {
            hits.pop();
          }
        }
      }
    }
    if (move === null) {
      move = generateAIMove(board);
    }
    hits.push(move);
    return board.receiveAttack(move);
  };
  return Object.assign(computer, { makeAIMove });
};

export default Computer;
