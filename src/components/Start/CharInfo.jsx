// import char1 from '../../images/person/char1.png';

function CharInfo({id, name, job, age, ability, imgsrc, abilityInfo}){

  return(
    <>

    <div className='char__info__box'>
      <div className='char__select__name'>
        이름 : {name}
      </div>
      <div className='char__select__job'>
        이전 직업 : {job}
      </div>
      <div className='char__select__ability'>
       특수 능력 : {ability}
      </div>
      <div className='char__select__age'>
       나이 : {age}
      </div>
      <div className='char__select__abilityInfo'>
       특수능력 설명 : {abilityInfo}
      </div>
    </div>
  
    {/* <div className="char__select__name">
      {name}
    </div>
    
    <div className="char__select__job">
      {job}
    </div>
    <div className="char__select__ablity">
      {ability}
    </div>
    <div className="char__select__age">
      {age}
    </div> */}
  
  </>
  );
}

export default CharInfo;

// 캐릭터 선택하는데 애니메이션을 줘서 좀 재밌게 구현해보고 싶다.

// 캐릭터를 선택하세요 라는 메시지를 띄워야 한다.