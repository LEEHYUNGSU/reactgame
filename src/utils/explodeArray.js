/**
 * Explode array into divisions
 * @param {Array<any>} array Initial array
 * @param {*} divSize Division size
 * @returns Array of divided arrays
 */
const explodeArray = (array, divSize) => {
  if (divSize > array.length) return 'Invalid division size!'; // Prevent oversetting the divSize

  // divSize가 array.length보다 크면 불가능하다.

  const tempArray = [];

  // 임시배열 선언


  let tempDiv = [];

  // 임시 div

  for (let i = 0; i < array.length; i += 1) {
    tempDiv.push(array[i]);
    // If temp div is full

    // 들어온 배열의 요소를 차례대로 tempDiv에 넣는다.
    if (tempDiv.length === divSize) {
      // 만약 tempDiv의 사이즈가 divSize와 같다면


      tempArray.push(tempDiv);

      // 선언한 임시배열에 배열을 마지막 요소로 넣는다. 
      tempDiv = [];

      // 임시 배열을 비운다.
    }
    // Last not full div
    if (i === array.length - 1 && tempDiv.length !== 0) tempArray.push(tempDiv);

    // i가 array의 마지막 요소이고 tempDiv의 길이가 0이 아니면 tempArray에 tempDiv를 푸시한다.
  }

  return tempArray;


  // if문의 공통된 요소는 어쨌든 tempArray에 tempDiv를 푸쉬하는 것이고 그것은 인자로 받은 배열의 요소를 계속 집어 넣는 배열이다.
};

export default explodeArray;
