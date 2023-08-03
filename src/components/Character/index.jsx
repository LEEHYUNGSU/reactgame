import React from 'react';
import Sprite from './Sprite';
import useKeyPress from '../../hooks/useKeyPress';
import { Characters } from '../../config/CharacterModels';
import KeyboardSettings from '../../config/KeyboardSettings';
import { move, speedUp } from '../../@core/characterMovements';
import { useState, useEffect } from 'react';



// 이 부분이 사실상 우리가 이 프로젝트에서 가장 보고 싶었던 것이다. 이것은 캐릭터의 움직임을 제어하고 맵에 띄우는 함수들을 보여주고 있다. 이것이 우리에게 가장 흥미로운 것이다. 우선 스트라이트는 이미지를 임포트하는 구문이고, useKeyPress를 임포트하는 것은 자세히 봐야겠지만, 미리 사전에 입력하는 키의 경우의 수를 세팅한 것이다.


// export default function useKeyPress(cb) {
//   React.useEffect(() => {
//     window.addEventListener('keydown', cb);
//     return () => {
//       window.removeEventListener('keydown', cb);
//     };
//   }, [cb]);
// }

// 키 프레스 구문은 직접 가져와서 분석해보도록 한다. cb라는 변수에 맞춰서, 그 변수가 변할 때 마다, keydown이라는 것(키를 입력하는 것)을 애드이벤트리스너 한 다음에, 리무브리스너 해주는 구문이다. cb의 변화에 따라 애드이벤트리스너 애드리무버리스너를 계속 실행해주는 useEffect 구문인 것이다.


// 다음으로 move와 speedUp 함수를 가져오고 있다. 이 부분이 맵 안에서 캐릭터를 세팅하고 캐릭터를 움직이는 데 있어 가장 중요하면서도 핵심이고, 가장 알아야 하는 구문인 것 같다.




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