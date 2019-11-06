import Ship from '../src/ship';

describe('testing ship module', () => {
    let ship = {};

    beforeEach(() => {
        ship = Ship(3);
        ship.setCoordinate([1,2,3]);
    })
   
    test('ship_hit increase on hit',()=> {
        expect(ship.hit(1)).toEqual(true);
        expect(ship.getShipHits()).toEqual(1);
    });
    test('ship of three length doesnt sink on double hit', () => {
        ship.hit(1);
        expect(ship.isSunk()).toBeFalsy();
    });
    test('ship of three length sinks on triple hit', () => {
        ship.hit(1);
        ship.hit(2);
        ship.hit(3);
        expect(ship.isSunk()).toBeTruthy();
    });

})
