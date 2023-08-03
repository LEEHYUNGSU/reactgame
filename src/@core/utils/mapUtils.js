/* eslint-disable consistent-return */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
import explodeArray from '../../utils/explodeArray';
import getPositionOffsets from '../../utils/getPositionOffsets';

/**
 * Creates map matrix from data
 * @param {Object} mapObject Initial map object
 * @param {String} pathLayerName Map layer contains path
 * @returns Matrix of map and it's properties
 */
export const createMapData = (mapObject, pathLayerName) => {
  const { layers, tileheight, tilewidth } = mapObject;
  // Select path layer
  const pathLayer = layers.filter((layer) => layer.name === pathLayerName)[0];

  // pathLayer는 layers 중에서 layer의 이름이 pathLayer와 같은 것 중에서 0번을 가져온다.

  return {
    map: explodeArray(pathLayer.data, pathLayer.width),

    // 맵을 만들어내는 함수가 explodeArray이며, 이것은 데이터를 변형한 것이며, 유효성 검증과 관계된 함수인 것 같다. 현재  맵의 width값은 40이며, 높이값은 30, 데이터들은 무수히 많은 데이터의 배열로 이루어져 있다. 아마 길이가 40 높이가 30이니 배열은 1200개의 데이터로 이루어져 있을 것이라 추정된다.
    height: pathLayer.height,
    width: pathLayer.width,
    tileHeight: tileheight,
    // 타일의 높이와 넓은 32이다.
    tileWidth: tilewidth,
  };
};

/**
 * Calculates starting position of the player based on path layer of map
 * @param {Object} pathLayerData Path layer object
 * @returns Start position of player
 */
export const getStartPosition = (pathLayerData) => {
  const { map, height, width, tileHeight, tileWidth } = pathLayerData;

  // pathLayer 데이터에서  넓이(40), 높이 (30), 타일의 넓이높이(32)를 구조분해할당 하였다.
  let firstAvailableTile = { x: 0, y: 0 };

  // 첫번째접근가능한 타일은 x가 0이고, y가 0인 객체로 선언한다.

  // Look for first movable tile location
  search: for (let i = 0; i < height; i += 1) {
    for (let k = 0; k < width; k += 1) {
      if (map[i][k] === 0) {
        firstAvailableTile = { x: i, y: k };
        break search;
      }
    }
  }

  // break search를 통하여 (라벨) 중첩 반복문을 빠져나갈 수 있다. i가 0 부터 높이 30까지 반복되며, 또한 k는 넓이 40까지 반복된다. 만약 map[i][k]가 0 인경우에 firstAvailableTie은 x가 i이고 y가 k인 객체이며, 탐색을 멈춘다.

  return {
    x: firstAvailableTile.x * tileHeight,
    y: firstAvailableTile.y * tileWidth,
  };

  // getStartPosition은 객체를 반환하는데 x값은 firstAvailableTile x에서 곱하기 32, y값은 firstAvailableTile y값에서 곱하기 32이다.
};

/**
 * Calculates player's current position
 * @param {Ref<HTMLElement>} mapRef Map reference
 * @param {Ref<HTMLElement} charRef Player reference
 * @returns Player's position
 */
export const getPlayerPosition = (mapRef, charRef) => {
  const { top: mapOffsetTop, left: mapOffsetLeft } = getPositionOffsets(mapRef);

  // mapRef를 참조하여 top 값을 mapOffsetTop 변수에 저장하고, left값을 mapOffsetLeft에 저장하며, 이것은 getPositionOffsets(mapRef)를 실행한 값이다.
  const { top: charOffsetTop, left: charOffsetLeft } = getPositionOffsets(charRef);

  // charRef를 참조하여 부모요소로부터 떨어진 offset값인 top을 charOffsetTop이라는 변수에 저장하고, left값도 부모요소로부터 떨어진 거리를 charOffsetLeft 값에 저장한다.

  return { x: charOffsetTop - mapOffsetTop, y: charOffsetLeft - mapOffsetLeft };

  // getPlayerPosition은 x와 y를 담은 객체를 반환한다. 그것에 담겨 있는 x값은 캐릭터의 오프셋값과 맵의 오프셋 값을 뺀 값이고, 그런데 이 x 값이 Top과 관련된 것이고, y값이 left와 관련된 것이다.

};

/**
 * Calculates if player is able to move next direction
 * @param {Ref<HTMLElement>} charRef Character reference
 * @param {Ref<HTMLElement>} mapRef Map reference
 * @param {Object} pathLayerData Path layer data
 * @param {String} direction Direction string
 * @param {Number} stepSize Step size of player
 * @returns Move permit boolean
 */
export const isAbleToWalk = (charRef, mapRef, pathLayerData, direction, stepSize, ableMove, setAbleMove) => {
  const { map, tileHeight, tileWidth } = pathLayerData;

  // 맵 데이터에서 map과 타일높이, 타일넓이를 가져오며 32이다.
  const { top: mapOffsetX, left: mapOffsetY } = getPositionOffsets(mapRef);

  // 맵을 getPosition을 실행하면 부모요소로부터의 x와 y의 오프셋 거리가 나오는데, 얼마나 떨어져있는지. 0,0으로 추정된다.
  const {
    offsetTop: top,
    offsetLeft: left,
    offsetHeight: charHeight,
    offsetWidth: charWidth,
  } = charRef.current;

  // console.log(`top: ${top}`);

  // 걸을때마다 top값은 10씩 줄어들고있으며(위로), 왼쪽으로 걸을 때마다 left값도 10씩 줄어들게 계산되어 있다. charHeight와 widt는 각각 32이다.
  // console.log(`left: ${left}`);

  // charRef의 current값을 참조한다. 그래서 offsetTop, offsetLeft, offsetHeight, offsetWidth라는 변수들을 각각 top, left, charHeight, charWidth에 할당한다.



  // 현재 top, left의 값은 전체 맵에서 절대적인 위치를 나타내지만, 

  // For up movement
  if (direction === 'UP' && ableMove) {
    const currentTopX = top - mapOffsetX - stepSize;

    // curretnTopX라는 값은 현재의 캐릭터가 위치해 있는 top값에서, 맵의 offsetX값 아마도 0을 뺀 다음 stepSize인 10을 빼 나간다. 
    const currentTopY = left - mapOffsetY;


    // 위쪽으로 움직였으므로 currentY값은 그대로이다.(Y값을 현재 left로 잡고 있기 때문이다.)

    
    // console.log(top);
    // Current tile position of player
    const tileLocation = {
      x: Math.floor(currentTopX / tileHeight),
      y: Math.floor(currentTopY / tileWidth),
    };

    // tileLocation에서 x값과 y값을 가진 객체인데, currentX값은 줄어들었을 것이며(위쪽으로 움직였다면) 그래서 현재 내가 사용하고 있는 것처럼 900 정도라고 해보자. 그리고 타일의 높이는 32이므로 이것을 나누면 약 30정도이며 이것을 버린다. 이것은 즉 x값은 타일의 높이와 관련된 즉 위로 아래로 움직일 때 변하는 값인데, 이것을 나눈다는 것은 즉 유효한 타일이 몇 개나 남았는지 보여주는 것이다.

    const able =
      tileLocation.x !== map.length &&
      tileLocation.y !== map[0].length &&
      map[tileLocation.x][tileLocation.y] === 0 &&
      top > 20

      if (!able) {
        console.log("tileLocation.x:", tileLocation.x);
        console.log("tileLocation.y:", tileLocation.y);
      }

  


      // 그래서 걸을 수 있다는 것, 캐릭터가 움직일 수 있다는 것은 타일로케이션이라는 것은 결국 스텝사이즈와 관계없이 캐릭터가 유효한 타일 내에 어느 위치에 존재하는지에 대한 밸류값을 담고 있는데, 그것이 맵을 벗어나지 않으며, 그것이 0이라는 값(걸을 수 있는 타일)에 위치한 타일이어야 하며... y와 관계된 값은 알기 어렵다.

    return able;
  }

  // For down movement
  if (direction === 'DOWN' && ableMove) {
    const currentEndX = top - mapOffsetX + charHeight;
    const currentEndY = left - mapOffsetY + charWidth;

    // console.log(left);
    // console.log(mapOffsetY);
    // console.log(charWidth);

    // Current tile position of player
    const tileLocation = {
      x: Math.floor(currentEndX / tileHeight),
      y: Math.floor(currentEndY / tileWidth),
    };

    // console.log(tileLocation);
    // console.log(map.length); 
    // console.log(map[0].length);

    const able =
      tileLocation.x !== map.length &&
      tileLocation.y !== map[0].length &&
      map[tileLocation.x][tileLocation.y] === 0;

      if (!able) {
        console.log("tileLocation.x:", tileLocation.x);
        console.log("tileLocation.y:", tileLocation.y);
      }
    return able;
   
  }

  // For left movement
  if (direction === 'LEFT' && ableMove) {
    const currentTopX = top - mapOffsetX;
    const currentTopY = left - mapOffsetY - stepSize;

    // Current tile position of player
    const tileLocation = {
      x: Math.floor(currentTopX / tileHeight),
      y: Math.floor(currentTopY / tileWidth),
    };

    const able =
      tileLocation.x !== map.length &&
      tileLocation.y !== map[0].length &&
      map[tileLocation.x][tileLocation.y] === 0;

      if (!able) {
        console.log("tileLocation.x:", tileLocation.x);
        console.log("tileLocation.y:", tileLocation.y);
      }

    return able;
  }

  // For right movement
  if (direction === 'RIGHT' && ableMove) {
    const currentEndX = top - mapOffsetX + charHeight;
    const currentEndY = left - mapOffsetY + charWidth;

    // Current tile position of player
    const tileLocation = {
      x: Math.floor(currentEndX / tileHeight),
      y: Math.floor(currentEndY / tileWidth),
    };

   

    const able =
    tileLocation.x !== map.length &&
    tileLocation.y !== map[0].length &&
    map[tileLocation.x][tileLocation.y] === 0;

    if (!able) {
      console.log("tileLocation.x:", tileLocation.x);
      console.log("tileLocation.y:", tileLocation.y);
    }

      return able;
    }



  };



      // const able =
    // tileLocation.x !== map.length &&
    // tileLocation.y !== map[0].length &&
    // map[tileLocation.x][tileLocation.y] === 0;

    // const doorOpen = tileLocation.y > 27 && !able;

    // return doorOpen ? doorOpen : able;
