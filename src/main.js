import Player from './player';
import Computer from './computer';
import GameBoard from './gameboard';

let playerOne = {};
let playerTwo = {};
let gameBoardOne = {};
let gameBoardTwo = {};

const startGame = (name) => {
  playerOne = Player(name);
  playerTwo = Computer();
  gameBoardOne = GameBoard();
  gameBoardOne.createShips();
  gameBoardTwo = GameBoard();
  gameBoardTwo.createShips();
};


const makeMove = (move) => playerOne.makeMove(move, gameBoardTwo);

const getBoardOne = () => gameBoardOne;

const getBoardTwo = () => gameBoardTwo;

const getPlayerOne = () => playerOne;

const getPlayerTwo = () => playerTwo;

const AIMove = () => playerTwo.makeAIMove(gameBoardOne);

export {
  startGame,
  getBoardOne,
  getBoardTwo,
  getPlayerOne,
  AIMove,
  makeMove,
  getPlayerTwo,
};
