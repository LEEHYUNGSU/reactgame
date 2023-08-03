function CharPict({ imgsrc, id, charSelectNumber }) {
  const padding = id === charSelectNumber ? '2%' : '0'; // 조건에 따라 padding 값을 설정합니다.

  return (
    <>
      <div className='char__img__con' style={{ padding }}>
        <img className='char__img' src={imgsrc} alt='char1' />
      </div>
    </>
  );
}

export default CharPict;