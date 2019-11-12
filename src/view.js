import * as main from './main';
import './style.css';

const allowDrop = (ev) => {
  const newEv = ev;
  newEv.preventDefault();
  newEv.dataTransfer.dropEffect = 'move';
};

const drag = (ev) => {
  const newEv = ev;
  newEv.dataTransfer.setData('text', ev.target.id);
  newEv.dataTransfer.effectAllowed = 'move';
};

const drop = (ev) => {
  ev.preventDefault();
  const id = ev.dataTransfer.getData('text');
  const coord = Number(id.slice(4));
  const ele = document.getElementById(id);
  const oId = ev.target.id.slice(6);
  main.getBoardOne().changeShipCoordinate(coord, Number(oId));
  ele.style.top = `${Number(oId[0]) * 30}px`;
  ele.style.left = `${Number(oId[1]) * 30}px`;
};

const endGame = (player) => {
  const board = document.getElementById('boards');
  board.innerHTML = `<h3>${player.getName()} has won !!!</h3>`;
};

const renderEmptyBoard = () => {
  const pBoard = document.getElementById('playerBoard');
  pBoard.innerHTML = '';
  for (let i = 0; i < 10; i += 1) {
    const divElement = document.createElement('div');
    divElement.style.height = '30px';
    for (let j = 0; j < 10; j += 1) {
      const spanElement = document.createElement('span');
      spanElement.id = `cellE-${i}${j}`;
      spanElement.classList.add('board-cell');
      divElement.appendChild(spanElement);
    }
    pBoard.appendChild(divElement);
  }
};
const renderPlayerBoard = (board) => {
  const pBoard = document.getElementById('playerBoard');
  pBoard.innerHTML = '';
  const pName = document.createElement('div');
  pName.innerHTML = `${main.getPlayerOne().getName()}`;
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
};

const getShips = () => {
  const ships = main.getBoardOne().getShips();
  const playerBoard = document.getElementById('playerBoard');
  ships.forEach((ship) => {
    const divElement = document.createElement('div');
    divElement.setAttribute('draggable', 'true');
    divElement.addEventListener('dragstart', drag);
    playerBoard.addEventListener('dragover', allowDrop);
    divElement.classList.add('ships');
    let left = 0;
    let top = 0;
    let width = 0;
    let height = 0;
    const coord = ship.getCoordinates();
    if (coord.length === 1) {
      top = Math.floor(coord / 10) * 30;
      left = (coord % 10) * 30;
      width = 30;
      height = 30;
    } else {
      const first = coord[0];
      const second = coord[1];
      top = Math.floor(first / 10) * 30;
      left = (first % 10) * 30;
      if (Math.floor(first / 10) === Math.floor(second / 10)) {
        width = 30 * coord.length;
        height = 30;
      } else {
        height = 30 * coord.length;
        width = 30;
      }
    }
    divElement.id = `ship${Math.floor(coord[0] / 10)}${coord[0] % 10}`;
    divElement.style.height = `${height}px`;
    divElement.style.width = `${width}px`;
    divElement.style.left = `${left}px`;
    divElement.style.top = `${top}px`;
    playerBoard.appendChild(divElement);
    playerBoard.addEventListener('drop', drop);
  });
};
const renderCompBoard = (board) => {
  const boards = document.getElementById('boards');
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
    const hit = main.makeMove(move);
    document.getElementById(spanId).innerHTML = hit ? 'X' : '.';
    if (main.getBoardTwo().IsAllShipsSunk()) {
      endGame(main.getPlayerOne());
    }
    if (!hit) {
      cBoard.classList.add('disableddiv');
      setTimeout(() => {
        let check = true;
        const i = setInterval(() => {
          check = main.AIMove(main.getBoardOne().getBoard());
          renderPlayerBoard(main.getBoardOne().getBoard());
          if (!check) {
            clearInterval(i);
            cBoard.classList.remove('disableddiv');
          }
        }, 500);
        renderPlayerBoard(main.getBoardOne().getBoard());
        if (main.getBoardOne().IsAllShipsSunk()) {
          endGame(main.getPlayerTwo());
        }
      }, 500);
    }
  });
  boards.appendChild(cBoard);
};

const displayPlayersInfo = () => {
  const playerInfo = document.getElementById('playerInfo');
  const textInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Set Board';
  textInput.setAttribute('placeholder', 'Enter your name');
  playerInfo.appendChild(textInput);
  playerInfo.appendChild(submitBtn);
  playerInfo.classList.add('playerInfo');
  submitBtn.addEventListener('click', () => {
    playerInfo.innerHTML = '';
    main.startGame(textInput.value);
    renderEmptyBoard();
    getShips();
    const startGameBtn = document.createElement('button');
    startGameBtn.innerHTML = 'Start Game';
    playerInfo.appendChild(startGameBtn);
    startGameBtn.addEventListener('click', () => {
      const playerBoard = document.getElementById('playerBoard');
      playerBoard.innerHTML = '';
      renderPlayerBoard(main.getBoardOne().getBoard());
      renderCompBoard(main.getBoardTwo().getBoard());
      playerInfo.removeChild(startGameBtn);
    });
  });
};

document.onload(displayPlayersInfo());
