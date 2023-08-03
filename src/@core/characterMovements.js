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



/**
 * Speed up player
 */
export const speedUp = () => {
  // 2x step size boost
  if (window.stepSize < maxStepSize) window.stepSize *= 2;
  else window.stepSize = stepSize; // Reset step size
};
