const Ship = (length) => {
    let shipHits = 0;
    const getShipHits = () => shipHits;
    let coordinates = [];
    const getCoordinates = () => coordinates;
    const setCoordinate = (coord) => {
        if(coord.length === length){
            coordinates = coord;
        }        
    };
    const hit = (coord) => {
        if(coordinates.includes(coord)){
            shipHits += 1;
            return true;
        }
        return false;
    }
    const isSunk = () => shipHits === length
    return {
        getShipHits, setCoordinate, hit, isSunk, getCoordinates,
    }
}

export default Ship;