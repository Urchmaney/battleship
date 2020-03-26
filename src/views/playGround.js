import {
  AIMove, makeMove, getBoardTwo, getBoardOne, getPlayerOne,
} from '../main';
import Sound from '../sound';
import '../style.css';
import blastSound from '../sounds/blast.mp3';
import splashSound from '../sounds/splash.mp3';
import spalshImg from '../images/splash.webp';
import blastImg from '../images/blast.png';

const endGame = (player) => {
  const board = document.getElementById('boards');
  board.innerHTML = `<h3>${player.getName()} has won !!!</h3>`;
};

let pBlastSound;
let pSplashSound;
const miss = `<img src="${spalshImg}" height="20" width="20" />`;
const blast = `<img src="${blastImg}" height="20" width="20" />`;

const setupBoardContainer = () => {
  pBlastSound = new Sound(blastSound);
  pSplashSound = new Sound(splashSound);
  const mainDiv = document.getElementById('main');
  const container = document.createElement('div');
  const pContainer = document.createElement('div');
  const cContainer = document.createElement('div');
  mainDiv.innerHTML = '';
  const pBoard = document.createElement('div');
  pBoard.id = 'pBoard';
  pBoard.classList.add('board');
  const pName = document.createElement('div');
  pName.classList.add('play-name');
  pName.innerHTML = `${getPlayerOne().getName()}`;
  pContainer.appendChild(pName);
  pContainer.appendChild(pBoard);

  const cBoard = document.createElement('div');
  cBoard.id = 'computerBoard';
  cBoard.classList.add('board');
  const cName = document.createElement('div');
  cName.classList.add('play-name');
  cName.innerHTML = 'Computer';
  cContainer.appendChild(cName);
  cContainer.appendChild(cBoard);
  container.appendChild(pContainer);
  container.appendChild(cContainer);
  container.classList.add('play-container');
  mainDiv.appendChild(container);
};


const renderPlayerBoard = (board) => {
  const pBoard = document.getElementById('pBoard');
  pBoard.innerHTML = '';
  for (let i = 0; i < 10; i += 1) {
    const divElement = document.createElement('div');
    for (let j = 0; j < 10; j += 1) {
      const spanElement = document.createElement('span');
      spanElement.innerHTML = board[i][j];
      if (board[i][j] === '.') spanElement.innerHTML = miss;
      if (board[i][j] === 'X') spanElement.innerHTML = blast;
      spanElement.id = `cellP-${i}${j}`;
      spanElement.classList.add('board-cell');
      divElement.appendChild(spanElement);
    }
    pBoard.appendChild(divElement);
  }
};

const renderCompBoard = (board) => {
  const cBoard = document.getElementById('computerBoard');
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
    if (hit) {
      pBlastSound.play();
    } else { pSplashSound.play(); }
    document.getElementById(spanId).innerHTML = hit ? blast : miss;
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
            pSplashSound.play();
            clearInterval(i);
            cBoard.classList.remove('disableddiv');
          } else {
            pBlastSound.play();
          }
        }, 1000);
        renderPlayerBoard(getBoardOne().getBoard());
        if (getBoardOne().IsAllShipsSunk()) {
          endGame(getPlayerTwo());
        }
      }, 1000);
    }
  });
};

const display = () => {
  setupBoardContainer();
  renderPlayerBoard(getBoardOne().getBoard());
  renderCompBoard(getBoardTwo().getBoard());
};

export default display;
