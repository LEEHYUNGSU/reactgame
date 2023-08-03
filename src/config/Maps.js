import Map01 from '../images/map01.json';
import StartMapData from '../images/map02.json';
import RacingTrackImage from '../images/racingTrack.png';
import RacingMapData from '../images/racingTrack.json';
import RacingMapData2 from '../images/maps/newTrack.json';
import RacingMapImage from '../images/maps/newTrack.png';
import HouseImage from '../images/maps/house.png';
import HouseData from '../images/maps/house.json';
import totalTown from '../images/maps/NewTotalTown.json';
import totalTownImage from '../images/maps/NewTotalTown.png';
import NewHouseImage from '../images/maps/newHouse.png';
import NewHouseData from '../images/maps/newHouse.json';
import NewTotalTown from '../images/maps/NewTotalTown.json';
import NewTotalTownImg from '../images/maps/NewTotalTown.png';



export const Maps = {
 
  'map-2': {
    image: RacingMapImage,
    data: RacingMapData2,
    pathLayerName: 'Tile',
    sizeX: 1600,
    sizeY: 960,
  },
  'map-3': {
    image: NewHouseImage,
    data: NewHouseData,
    pathLayerName: 'Object',
    sizeX: 1600,
    sizeY: 960,
  },
  'map-4': {
    image: NewTotalTownImg,
    data: NewTotalTown,
    pathLayerName: 'Object',
    sizeX: 1600,
    sizeY: 960,
  }
};

