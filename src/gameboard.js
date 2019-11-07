import Ship from './ship';

const GameBoard = () => {
  let ships = [];
  const board = [['* ', '* ', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', ' *', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '* ', '*', '*', '*'],
    ['*', '*', ' *', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
  ];


  const createShips = () => {
    ships.push(Ship(1));
    ships[ships.length - 1].setCoordinate([14]);
    ships.push(Ship(1));
    ships[ships.length - 1].setCoordinate([88]);
    ships.push(Ship(1));
    ships[ships.length - 1].setCoordinate([1]);
    ships.push(Ship(1));
    ships[ships.length - 1].setCoordinate([99]);
    ships.push(Ship(2));
    ships[ships.length - 1].setCoordinate([0, 10]);
    ships.push(Ship(2));
    ships[ships.length - 1].setCoordinate([66, 67]);
    ships.push(Ship(2));
    ships[ships.length - 1].setCoordinate([51, 61]);
    ships.push(Ship(3));
    ships[ships.length - 1].setCoordinate([22, 23, 24]);
    ships.push(Ship(3));
    ships[ships.length - 1].setCoordinate([91, 92, 93]);
    ships.push(Ship(4));
    ships[ships.length - 1].setCoordinate([45, 46, 47, 48]);
  };
  const markOnBoard = (coordinate, option) => {
    board[Math.floor(coordinate / 10)][Math.floor(coordinate % 10)] = option ? 'X' : '.';
    return option;
  };

  const checkIfHit = (coord) => {
    for (let i = 0; i < ships.length; i += 1) {
      if (ships[i].hit(coord)) return true;
    }
    return false;
  };
  const SetShipsToBoard = (shipsArray) => {
    ships = shipsArray;
  };
  const getBoard = () => board;

  const receiveAttack = (coord) => markOnBoard(coord, checkIfHit(coord));

  const IsAllShipsSunk = () => {
    for (let i = 0; i < ships.length; i += 1) {
      if (!ships[i].isSunk()) {
        return false;
      }
    }
    return true;
  };
  return {
    getBoard, receiveAttack, SetShipsToBoard, createShips, IsAllShipsSunk,
  };
};
export default GameBoard;
