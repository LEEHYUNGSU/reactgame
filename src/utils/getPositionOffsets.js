/**
 * Fetches offset value of an element
 * @param { Ref<ElementRef> } elementRef Element reference
 * @returns Offset object { top, left }
 */

export default function getPositionOffsets(elementRef) {
  return {
    top: elementRef.current.offsetTop,
    left: elementRef.current.offsetLeft,
  };
}


// getPositionOffsets은 어떤 요소의 Ref값을 참조하여 인자로 받고, 그것의 현재 offsetTop과 offsetLeft값을 각각 top, left라는 키에 담은 객체를 반환한다.



// offsetTop: offsetTop은 요소의 상위(parent) 요소로부터의 거리를 픽셀 단위로 반환합니다. 즉, 요소가 상위 요소와 얼마나 떨어져 있는지를 나타냅니다. 만약 상위 요소가 position 속성을 가지고 있지 않다면(body 요소의 경우), offsetTop은 문서(document)의 맨 위를 기준으로 합니다. 상위 요소가 position 속성을 가지고 있다면(position: relative, position: absolute, position: fixed 등), 해당 요소를 기준으로 거리를 측정합니다.

// offsetLeft: offsetLeft는 요소의 왼쪽을 기준으로 한 상위(parent) 요소로부터의 거리를 픽셀 단위로 반환합니다. 마찬가지로, 상위 요소가 position 속성을 가지고 있지 않다면(body 요소의 경우), offsetLeft은 문서(document)의 맨 왼쪽을 기준으로 합니다. 상위 요소가 position 속성을 가지고 있다면(position: relative, position: absolute, position: fixed 등), 해당 요소를 기준으로 거리를 측정합니다.

// 주의할 점은 offsetTop과 offsetLeft 값은 요소의 위치가 변경될 때마다 업데이트되므로, 동적으로 변하는 위치를 항상 반영합니다. 또한, 요소가 보이지 않거나 display: none으로 설정되어 있다면, offsetTop과 offsetLeft 값은 0이 됩니다.