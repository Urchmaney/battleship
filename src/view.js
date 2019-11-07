import * as main from './main';
import './style.css';


const endGame = (player) => {
  const board = document.getElementById('boards');
  board.innerHTML = `${player.getName()} has won !!!`;
};

const render = (boardOne, boardTwo) => {
  // const playerBoard = document.getElementById('playerBoard');
  const board = document.getElementById('boards');
  board.innerHTML = '';
  // playerBoard.innerHTML = '';
  const pBoard = document.createElement('div');
  pBoard.id = 'playerBoard';
  for (let i = 0; i < 10; i += 1) {
    const divElement = document.createElement('div');
    for (let j = 0; j < 10; j += 1) {
      const spanElement = document.createElement('span');
      //spanElement.id = `cell-${i}${j}`;
      spanElement.innerHTML = boardOne[i][j];
      spanElement.classList.add('board-cell');
      divElement.appendChild(spanElement);
    }
    pBoard.appendChild(divElement);
  }
  // const computerBoard = document.getElementById('computerBoard');
  const cBoard = document.createElement('div');
  cBoard.id = 'computerBoard';
  // computerBoard.innerHTML = '';
  for (let i = 0; i < 10; i += 1) {
    const divElement = document.createElement('div');
    for (let j = 0; j < 10; j += 1) {
      const spanElement = document.createElement('span');
      spanElement.id = `cell-${i}${j}`;
      spanElement.innerHTML = boardTwo[i][j];
      spanElement.classList.add('board-cell');
      divElement.appendChild(spanElement);
    }
    cBoard.appendChild(divElement);
  }
  cBoard.addEventListener('click', () => {
    const move = Number(event.target.id.slice(5));
    gameFlow(move);
  });
  board.appendChild(pBoard);
  board.appendChild(cBoard);
};

const gameFlow = (move) => {
  if (main.makeMove(move)) {
    render(main.getBoardOne().getBoard(), main.getBoardTwo().getBoard());
    if (main.getBoardTwo().IsAllShipsSunk()) {
      endGame(main.getPlayerOne());
    }
  } else {
    render(main.getBoardOne().getBoard(), main.getBoardTwo().getBoard());
    let check = true;
    while (check) {
      check = main.AIMove(main.getBoardOne().getBoard());
      render(main.getBoardOne().getBoard(), main.getBoardTwo().getBoard());
      // main.sleep2();
    }
    render(main.getBoardOne().getBoard(), main.getBoardTwo().getBoard());
    if (main.getBoardOne().IsAllShipsSunk()) {
      endGame(main.getPlayerTwo());
    }
  }
};

const displayPlayersInfo = () => {
  const playerInfo = document.getElementById('playerInfo');
  const textInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Start Game';
  textInput.setAttribute('placeholder', 'Enter your name');
  playerInfo.appendChild(textInput);
  playerInfo.appendChild(submitBtn);
  submitBtn.addEventListener('click', () => {
    main.startGame(textInput.value);
    render(main.getBoardOne().getBoard(), main.getBoardTwo().getBoard());
  });
};

document.onload(displayPlayersInfo());
