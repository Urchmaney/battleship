import * as main from './main';
import './style.css';


const endGame = (player) => {
  const playerBoard = document.getElementById('playerBoard');
  playerBoard.innerHTML = '';
  const computerBoard = document.getElementById('computerBoard');
  computerBoard.innerHTML = '';
  const board = document.getElementById('board');
  board.innerHTML = `${player.getName()} has won !!!`;
};

const render = (boardOne, boardTwo) => {
  const playerBoard = document.getElementById('playerBoard');
  for (let i = 0; i < 10; i += 1) {
    const divElement = document.createElement('div');
    for (let j = 0; j < 10; j += 1) {
      const spanElement = document.createElement('span');
      spanElement.id = `cell-${i}${j}`;
      spanElement.innerHTML = boardOne[i][j];
      divElement.appendChild(spanElement);
    }
    playerBoard.appendChild(divElement);
  }
  const computerBoard = document.getElementById('computerBoard');
  for (let i = 0; i < 10; i += 1) {
    const divElement = document.createElement('div');
    for (let j = 0; j < 10; j += 1) {
      const spanElement = document.createElement('span');
      spanElement.id = `cellAI-${i}${j}`;
      spanElement.innerHTML = boardTwo[i][j];
      divElement.appendChild(spanElement);
    }
    computerBoard.appendChild(divElement);
  }
  playerBoard.addEventListener('click', () => {
    const move = Number(event.target.id.slice(5));
    gameFlow(move);
  });
};

const gameFlow = (move) => {
  render(main.getBoardOne().getBoard(), main.getBoardTwo().getBoard());
  if (main.makeMove(move)) {
    if (main.getBoardTwo().IsAllShipsSunk()) {
      endGame(main.getPlayerOne());
    }
  } else {
    main.AIMove(main.getBoardOne().getBoard());
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
