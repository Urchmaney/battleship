import '../style.css';
import { getBoardOne } from '../main';
import renderPlayGround from './playGround';

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
  getBoardOne().changeShipCoordinate(coord, Number(oId));
  ele.style.top = `${Number(oId[0]) * 30}px`;
  ele.style.left = `${Number(oId[1]) * 30}px`;
};

const setShips = () => {
  const ships = getBoardOne().getShips();
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


const renderSetupBoard = () => {
  const mainDiv = document.getElementById('main');
  mainDiv.innerHTML = '';
  const container = document.createElement('div');
  const pBoard = document.createElement('div');
  const infoP = document.createElement('p');
  infoP.innerHTML = 'Drag and drop your fleets. Lets WAR';
  pBoard.id = 'playerBoard';
  pBoard.classList.add('board');
  pBoard.classList.add('setup-board');
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
  const startGameBtn = document.createElement('button');
  startGameBtn.innerHTML = 'Go to WAR';
  startGameBtn.addEventListener('click', () => {
    renderPlayGround();
  });
  container.classList.add('info-container');
  infoP.classList.add('setup-board-info');
  container.appendChild(pBoard);
  container.appendChild(infoP);
  container.appendChild(startGameBtn);
  mainDiv.appendChild(container);
};

const display = () => {
  renderSetupBoard();
  setShips();
};

export default display;
