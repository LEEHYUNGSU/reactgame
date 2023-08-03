/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
import Directions from '../config/Directions';
import { isAbleToWalk } from './utils/mapUtils';
import { stepSize, maxStepSize } from '../config/PlayerSettings';


window.stepSize = stepSize; // Set step size globally

/**
 * Player moving function
 * @param {Ref<HTMLElement>} charRef Character reference
 * @param {Ref<HTMLElement>} mapRef Map reference
 * @param {Object} pathLayerData Path layer data
 * @param {String} direction Direction String
 * @param {React.Dispatch} setPos Position setting dispatch
 * @param {React.Dispatch} setStep Stepping dispatch
 * @param {React.Dispatch} setDirection Direction setting dispatch
 */
export const move = (charRef, mapRef, pathLayerData, direction, setPos, setStep, setDirection, mapMove, setMapMove, pos, selectedMap, setMapPage, setQuizPage, setCoinPage, ableMove, setAbleMove) => {
  const able = isAbleToWalk(charRef, mapRef, pathLayerData, direction, window.stepSize, ableMove, setAbleMove);


  const {
    offsetTop: top,
    offsetLeft: left,
    offsetHeight: charHeight,
    offsetWidth: charWidth,
  } = charRef.current;

  if(able === false && top > 500 && direction === 'DOWN' && selectedMap === 'map-3' && left > 650 && left < 850){
    setMapMove(true);
    setPos({x:0, y:0});
  } 
  if(able === false && top > 400 && top < 570 && direction === 'RIGHT' && selectedMap === 'map-3' && left > 1480){
    setMapMove(true);
    setPos({x:0, y:0});
  } 

  if(able === true &&  top > 430 && top < 500 && left > 420 && left < 700 && selectedMap === 'map-4' && direction === 'UP'){
    setMapPage(false);
    setCoinPage(true);
  }


  if(able === true &&  top > 800 && top < 840 && left > 590 && left < 700 && selectedMap === 'map-4' && direction === 'UP'){
    setMapMove(true);
    setPos({x:0, y:0});
  }

  if(able === true && left > 245 && left < 365 && top > 730 && top < 850 && selectedMap === 'map-4' && direction === 'UP'){
    setMapPage(false);
    setQuizPage(true);
  }


  // if(able === true && top > 400 && top < 700 && left )


  // If able to move one of directions dispatch updates position on that direction
  able === true &&
    setPos((position) => {
      return {
        x:
          direction === 'UP'
            ? position.x - window.stepSize
            : direction === 'DOWN'
            ? position.x + window.stepSize
            : position.x,
        y:
          direction === 'LEFT'
            ? position.y - window.stepSize
            : direction === 'RIGHT'
            ? position.y + window.stepSize
            : position.y,
      };
    });

  setStep((step) => (step + 1) % 3); // Step animation
  setDirection(Directions[direction]); // Set player direction
  console.log(`pos : ${pos}`);
  console.log(top);
  console.log(left);
};

// 무브는 우선 에이플인지 판단한다. 그래서 에이플이면 포지션 값을 새로 정한다. 업이면 x에서 스텝사이즈 값을 뺀 값을 리턴하고, 다운이면 x에서 스텝사이즈를 더한 값을 출력.

// 또한 스텝값을 다시 설정하는데, 기존 스텝값에서 1을 더한 다음, 나누기 3을 한다. 그리고 셋다이랙션을 하는데, 다이랙션 값은 아래쪽이 0, 왼쪽이 1, 오른쪽이 2, 위쪽이 3이다. direction 자체는 업앤라이트레프트로 들어오므로 그것에 맞는 키를 대칭하여 밸류값으로 다시 다이랙션을 세팅하는 것이다. 즉 왼쪽 키를 누르면 셋다이렉션이 1로 세팅되는 것이다.



/**
 * Speed up player
 */
export const speedUp = () => {
  // 2x step size boost
  if (window.stepSize < maxStepSize) window.stepSize *= 2;
  else window.stepSize = stepSize; // Reset step size
};
