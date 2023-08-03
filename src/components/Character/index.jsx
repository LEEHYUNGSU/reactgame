import React from 'react';
import Sprite from './Sprite';
import useKeyPress from '../../hooks/useKeyPress';
import { Characters } from '../../config/CharacterModels';
import KeyboardSettings from '../../config/KeyboardSettings';
import { move, speedUp } from '../../@core/characterMovements';
import { useState, useEffect } from 'react';








const Character = React.forwardRef(({ startPos, pathLayerData, char, data, mapMove, setMapMove, pos, setPos, selectedMap, setMapPage, setQuizPage, setCoinPage, ableMove, setAbleMove, }, ref) => {
  const charRef = ref;
  // const [pos, setPos] = React.useState({ x: 0, y: 0 });
  // 캐릭터의 초기 포지션 값은 x0, y0으로 설정한다.

  const [direction, setDirection] = React.useState(0);
  // 초기 방향값은 0으로 설정되어 있다.

  const [step, setStep] = React.useState(1);

  

  // 초기 스텝값은 1로 설정되어 있다.

  console.log(`pos.x: ${pos.x}`);

  useKeyPress((event) => {
    switch (event.keyCode) {
      case KeyboardSettings.ESCAPE_KEY:
        data.setOpenSettings((open) => !open);
        console.log('setOpenSettingFalse');
        break;


        // 이벤트가 발생했을 때, 이벤트 키코드에 따라 스위치문이 발생한다. 만약 esc키를 누르면, 오픈세팅이라는 값을 오픈에서 오픈이 아닌 것으로 바꾼다. 이 구문의 정확한 의미는 알기가 어렵다.

      case KeyboardSettings.SPACE_KEY:
        speedUp();
        console.log('speedUp');
        break;

        // 스페이스키를 누르면 스피드업 함수가 실행된다. 이것은 속도를 2배로 하는 것이다.

      case KeyboardSettings.ARROW_UP_KEY:
        move(charRef, data.mapRef, pathLayerData, 'UP', setPos, setStep, setDirection, mapMove, setMapMove, pos, selectedMap, setMapPage, setQuizPage, setCoinPage, ableMove, setAbleMove,);
        break;

        // 위쪽 방향키를 누르면, 캐릭터를 참조하고, 맵을 참조하고, 레이어데이터를 참조하고, 업이라는 것을 전달하고, 셋포지션, 셋스텝, 셋다이렉션 값을 전달한다.

      case KeyboardSettings.ARROW_DOWN_KEY:
        move(charRef, data.mapRef, pathLayerData, 'DOWN', setPos, setStep, setDirection, mapMove, setMapMove, pos, selectedMap, setMapPage, setQuizPage, setCoinPage, ableMove, setAbleMove,);
        break;

      case KeyboardSettings.ARROW_LEFT_KEY:
        move(charRef, data.mapRef, pathLayerData, 'LEFT', setPos, setStep, setDirection, mapMove, setMapMove, pos, selectedMap, setMapPage, setQuizPage, setCoinPage, ableMove, setAbleMove,);
        break;

      case KeyboardSettings.ARROW_RIGHT_KEY:
        move(charRef, data.mapRef, pathLayerData, 'RIGHT', setPos, setStep, setDirection, mapMove, setMapMove, pos, selectedMap, setMapPage, setQuizPage, setCoinPage, ableMove, setAbleMove,);
        break;

      default:
        break;
    }
  });

  return (
    <div
      id="character"
      ref={charRef}
      style={{
        display: 'inline-block',
        position: 'relative',
        top: `${pos.x + startPos.x}px`,
        left: `${pos.y + startPos.y}px`,
      }}
    >
      <Sprite
        spriteUrl={Characters[char].sprite}
        height={32}
        width={32}
        direction={direction}
        step={step}
      />
    </div>
  );
});
export default Character;