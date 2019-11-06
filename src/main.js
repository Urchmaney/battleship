import Player from './player';
import Computer from './computer';
import GameBoard from './gameboard';

let playerOne = {};
let playerTwo = {};
let gameBoardOne = {};
let gameBoardTwo = {};

const startGame = () => {
  playerOne = Player('');
  playerTwo = Computer();
  gameBoardOne = GameBoard();
  gameBoardOne.createShips();
  gameBoardTwo = GameBoard();
  gameBoardTwo.createShips();
};

const getBoardOne = () => gameBoardOne;

const getBoardTwo = () => gameBoardTwo;

const getPlayerOne = () => playerOne;

const AIMove = () => {
  playerTwo.makeMove(gameBoardOne);
};

export {
  startGame,
  getBoardOne,
  getBoardTwo,
  getPlayerOne,
  AIMove,
};
