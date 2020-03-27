import {
  AIMove, makeMove, getBoardTwo, getBoardOne, getPlayerOne, startGame,
} from '../main';
// eslint-disable-next-line import/no-cycle
import setupPage from './setup';
import Sound from '../sound';
import '../style.css';
import blastSound from '../sounds/blast.mp3';
import splashSound from '../sounds/splash.mp3';
import spalshImg from '../images/splash.webp';
import blastImg from '../images/blast.png';

let pBlastSound;
let pSplashSound;
let pBoard;
let cBoard;
let tryBtn;
let endP;
const miss = `<img src="${spalshImg}" height="20" width="20" />`;
const blast = `<img src="${blastImg}" height="20" width="20" />`;

const endGame = (player) => {
  cBoard.classList.add('disableddiv');
  pBoard.classList.add('disableddiv');
  tryBtn.style.display = 'inline';
  tryBtn.innerHTML = 'Warriors rest not. War again.';
  endP.style.display = 'block';
  endP.classList.add('tryP');
  endP.innerHTML = `${player.getName()} has won !!!`;
  tryBtn.addEventListener('click', () => {
    startGame(player.getName());
    setupPage();
  });
};

const setupBoardContainer = () => {
  pBlastSound = new Sound(blastSound);
  pSplashSound = new Sound(splashSound);
  const mainDiv = document.getElementById('main');
  const container = document.createElement('div');
  endP = document.createElement('p');
  endP.id = 'endP';
  endP.style.display = 'none';
  tryBtn = document.createElement('button');
  tryBtn.id = 'tryBtn';
  tryBtn.style.display = 'none';
  tryBtn.classList.add('btn');

  const pContainer = document.createElement('div');
  const cContainer = document.createElement('div');
  mainDiv.innerHTML = '';
  pBoard = document.createElement('div');
  pBoard.id = 'pBoard';
  pBoard.classList.add('board');
  const pName = document.createElement('div');
  pName.classList.add('play-name');
  pName.innerHTML = `${getPlayerOne().getName()}`;
  pContainer.appendChild(pName);
  pContainer.appendChild(pBoard);

  cBoard = document.createElement('div');
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
  mainDiv.appendChild(endP);
  mainDiv.appendChild(tryBtn);
};


const renderPlayerBoard = (board) => {
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
