import Ship from './ship';

const GameBoard = () => {
  const ships = [];
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

  const getShips = () => ships;
  const createShips = () => {
    ships.push(Ship(1));
    ships[ships.length - 1].setCoordinate([14]);
    ships.push(Ship(1));
    ships[ships.length - 1].setCoordinate([88]);
    ships.push(Ship(1));
    ships[ships.length - 1].setCoordinate([56]);
    ships.push(Ship(1));
    ships[ships.length - 1].setCoordinate([99]);
    ships.push(Ship(2));
    ships[ships.length - 1].setCoordinate([0, 10]);
    ships.push(Ship(2));
    ships[ships.length - 1].setCoordinate([66, 67]);
    ships.push(Ship(2));
    ships[ships.length - 1].setCoordinate([51, 61]);
    ships.push(Ship(3));
    ships[ships.length - 1].setCoordinate([20, 21, 22]);
    ships.push(Ship(3));
    ships[ships.length - 1].setCoordinate([91, 92, 93]);
    ships.push(Ship(4));
    ships[ships.length - 1].setCoordinate([80, 81, 82, 83]);
  };

  const markOnBoard = (coordinate, option) => {
    board[Math.floor(coordinate / 10)][Math.floor(coordinate % 10)] = option ? 'X' : '.';
    return option;
  };

  const changeShipCoordinate = (oldCoord, newCoord) => {
    ships.forEach((ship) => {
      const shipCoord = ship.getCoordinates();
      if (shipCoord.includes(oldCoord)) {
        const toSet = [newCoord];
        if (shipCoord.length !== 1) {
          const wayToAdd = Math.floor(shipCoord[0] / 10) === Math.floor(shipCoord[1] / 10);
          for (let i = 1; i < shipCoord.length; i += 1) {
            if (wayToAdd) {
              toSet.push(newCoord + i);
            } else {
              toSet.push(newCoord + (i * 10));
            }
          }
          ship.setCoordinate(toSet);
        }
      }
    });
  };

  const checkIfHit = (coord) => {
    for (let i = 0; i < ships.length; i += 1) {
      if (ships[i].hit(coord)) return true;
    }
    return false;
  };

  const getBoard = () => board;

  const receiveAttack = coord => markOnBoard(coord, checkIfHit(coord));

  const IsAllShipsSunk = () => {
    for (let i = 0; i < ships.length; i += 1) {
      if (!ships[i].isSunk()) {
        return false;
      }
    }
    return true;
  };
  return {
    getBoard, receiveAttack, changeShipCoordinate, createShips, IsAllShipsSunk, getShips,
  };
};
export default GameBoard;
