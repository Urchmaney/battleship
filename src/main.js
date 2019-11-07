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

// let i = 0;
// const sleep2 = () => {
//   if (i < 1) {
//     i += 1;
//     // Continue the loop in 3s
//     setTimeout(sleep2, 7000);
//   }
// };
// const sleep = (milliseconds) => {
//   const start = new Date().getTime();
//   for (let i = 0; i < 1e7; i += 1) {
//     if ((new Date().getTime() - start) > milliseconds) {
//       break;
//     }
//   }
// };

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
  sleep,
  sleep2,
};
