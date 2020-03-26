import {
  AIMove, makeMove, getBoardTwo, getBoardOne, getPlayerOne,
} from '../main';
import '../style.css';

const endGame = (player) => {
  const board = document.getElementById('boards');
  board.innerHTML = `<h3>${player.getName()} has won !!!</h3>`;
};

const mainDiv = document.getElementById('main');

const renderPlayerBoard = (board) => {
  const pBoard = document.createElement('div');
  const pName = document.createElement('div');
  pName.innerHTML = `${getPlayerOne().getName()}`;
  pBoard.appendChild(pName);
  for (let i = 0; i < 10; i += 1) {
    const divElement = document.createElement('div');
    for (let j = 0; j < 10; j += 1) {
      const spanElement = document.createElement('span');
      spanElement.innerHTML = board[i][j];
      spanElement.id = `cellP-${i}${j}`;
      spanElement.classList.add('board-cell');
      divElement.appendChild(spanElement);
    }
    pBoard.appendChild(divElement);
  }
  mainDiv.appendChild(pBoard);
};

const renderCompBoard = (board) => {
  const cBoard = document.createElement('div');
  cBoard.id = 'computerBoard';
  const cName = document.createElement('div');
  cName.innerHTML = 'Computer';
  cBoard.appendChild(cName);
  for (let i = 0; i < 10; i += 1) {
    const divElement = document.createElement('div');
    for (let j = 0; j < 10; j += 1) {
      const spanElement = document.createElement('span');
      spanElement.id = `cell-${i}${j}`;
      spanElement.innerHTML = board[i][j];
      spanElement.classList.add('board-cell');
      divElement.appendChild(spanElement);
    }
    cBoard.appendChild(divElement);
  }
  cBoard.addEventListener('click', (event) => {
    const spanId = event.target.id;
    const move = Number(spanId.slice(5));
    const hit = makeMove(move);
    document.getElementById(spanId).innerHTML = hit ? 'X' : '.';
    if (getBoardTwo().IsAllShipsSunk()) {
      endGame(getPlayerOne());
    }
    if (!hit) {
      cBoard.classList.add('disableddiv');
      setTimeout(() => {
        let check = true;
        const i = setInterval(() => {
          check = AIMove(getBoardOne().getBoard());
          renderPlayerBoard(getBoardOne().getBoard());
          if (!check) {
            clearInterval(i);
            cBoard.classList.remove('disableddiv');
          }
        }, 500);
        renderPlayerBoard(getBoardOne().getBoard());
        if (getBoardOne().IsAllShipsSunk()) {
          endGame(getPlayerTwo());
        }
      }, 500);
    }
  });
  mainDiv.appendChild(cBoard);
};

const display = () => {
  renderPlayerBoard(getBoardOne().getBoard());
  renderCompBoard(getBoardTwo().getBoard());
};

export default display;
