import CharInfo from "./CharInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";


import CharPict from "./CharPict";
import { Characters } from "../../config/CharacterModels";
import man01pic from '../../images/person/인물사진/남1.png';
import man02pic from '../../images/person/인물사진/남2.png';
import man03pic from '../../images/person/인물사진/남3.png';
import man04pic from '../../images/person/인물사진/남4.png';
import man05pic from '../../images/person/인물사진/남5.png';
import man06pic from '../../images/person/인물사진/남6.png';
import man07pic from '../../images/person/인물사진/남7.png';

import woman01pic from '../../images/person/인물사진/여1.png';
import woman02pic from '../../images/person/인물사진/여2.png';
import woman03pic from '../../images/person/인물사진/여3.png';
import woman04pic from '../../images/person/인물사진/여4.png';
import woman05pic from '../../images/person/인물사진/여5.png';
import woman06pic from '../../images/person/인물사진/여6.png';






// 특수능력에 대한 생각: 1) 코인 판매시 판매 금액의 5%를 추가로 받는다. 2) 각각의 코인 5개에 대한 특수능력 >>> 5개   3) 각각의 동물 5마리에 대한 특수능력 >>> 5개  4) 게임을 쉽게 하는 난이도 조정에 대한 특수능력 >>> 기준금액의 60%만 채워도 클리어할 수 있음 >>> 12개. >>> 마지막캐릭터는 성별을 선택, 특수능력을 선택가능, 나이, 이름, 직업을 인풋으로 할 수 있다.




function CharSelect({charPage, setCharPage, startPage, setStartPage, selectedChar, setSelectedChar, charNumber, setCharNumber,}) {
  const [charSelectNumber, setCharSelectNumber] = useState(0);
  const CharInfoArray = [
     {
      avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
      sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
      id: 0,
      name: '김코딩',
      age: 30,
      sex: 'male',
      imgsrc: man01pic,
      job: '개발자 꿈나무',
      ability: 'Deep Dive',
      abilityInfo: '코드포테이토의 코인 가격 상승폭이 20% 증가합니다.',
    },
     {
      avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
      sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
      id: 1,
      name: '이근',
      age: 39,
      sex: 'male',
      imgsrc: man02pic,
      job: '전직 군인',
      ability: '가짜 사나이',
      abilityInfo: '아웃프런의 코인 가격 상승폭이 20% 증가합니다.',
    },
    {
      avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
      sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
        id: 2,
        name: '허수',
        job: '전직 프로게이머',
        age: '22',
        ability: '소메이커',
        sex: 'male',
        imgsrc: man03pic,
        abilityInfo: '밀탱크의 속도가 20% 증가합니다.',
    },
 {
      avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
      sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
      id: 3,
      name: '강형욱',
      job: '전직 훈련사',
      age: '42',
      ability: '개 조련사',
      sex: 'male',
      imgsrc: man04pic,
      abilityInfo: '윈디의 속도가 20% 증가합니다.',
    },
 {
      avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
      sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
      id: 4,
      name: '김도윤',
      job: '전직 퍼블리셔',
      age: '29',
      ability: '디자인 마스터',
      sex: 'male',
      imgsrc: man07pic,
      abilityInfo: '코딩와플의 코인 가격 상승폭이 20% 증가합니다',
    },
  {
      avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
      sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png', 
      id: 5,
      name: '이혜인',
      job: '전직 연예인',
      age: '15',
      ability: '뉴진스',
      sex: 'female',
      imgsrc: woman02pic,
      abilityInfo: '날쌩마의 속도가 20% 증가합니다',
      
    },
  {
      avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
      sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
      id: 6,
      name: '장원영',
      job: '전직 댄서',
      age: '18',
      ability: '아이즈원',
      sex: 'female',
      imgsrc: woman03pic,
      abilityInfo: '파오리의 속도가 20% 증가합니다',
    },
 {
      avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
      sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
      id: 7,
      name: '이서아',
      job: '전직 트레이더',
      age: '37',
      ability: '존버',
      sex: 'female',
      imgsrc: woman04pic,
      abilityInfo: '코인 판매시 판매 가격의 20%를 더 받습니다',
    },
{
      avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
      sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
      id: 8,
      name: '윤지아',
      job: '전직 간호사',
      age: '26',
      ability: '의료보험',
      imgsrc: woman05pic,
      abilityInfo: '코인의 떡락확률을 2배로 감소시킵니다',
    },
 {
      avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
      sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
      id: 9,
      name: '서아린',
      job: '전직 스타일리스트',
      age: '26',
      ability: '스타일리시',
      abilityInfo: '코드포테이토 코인을 10개 가지고 시작합니다',
      imgsrc: woman06pic,
    },
 {
      avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
      sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
      id: 10,
      name: '김혁규',
      job: '전직 프로게이머',
      age: '28',
      ability: '중꺽마',
      imgsrc: man05pic,
      abilityInfo: '코인의 떡상확률을 2배로 합니다',
    },
 {
      avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
      sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
      id: 11,
      name: '소주연',
      job: '전직 의사',
      age: '29',
      ability: '낭만닥터',
      abilityInfo: '코인이 상장폐지되어도 보유코인갯수를 유지합니다',
      imgsrc: woman01pic,
    },    
  ]


  const CharEnterBtn  = (event) => {
    if(event.key === 'Enter' && charPage){
      setSelectedChar(`char-${charNumber + 1}`);
      setStartPage(false);
      setCharPage(false);
      console.log(`selectedChar: ${selectedChar}`);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', CharEnterBtn);

    return() => {
      document.removeEventListener('keydown', CharEnterBtn);
    }
  }, [charPage, selectedChar, charNumber]);

  const charLeftRightBtn = (event) => {
    if(event.key === 'ArrowRight' && charPage){
      setCharSelectNumber((prev) => (prev < 11) ? (prev + 1) : 0);
      setCharNumber((prev) => (prev < 11) ? (prev + 1) : 0);
    }else if(event.key === 'ArrowLeft' && charPage){
      setCharSelectNumber((prev) => (prev === 0) ? 11 : (prev - 1));
      setCharNumber((prev) => (prev === 0) ? 11 : (prev - 1));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', charLeftRightBtn);

    return() => {
      document.removeEventListener('keydown', charLeftRightBtn);
    }
  })
  
  
  return(
    <div className="char__select__container">

      <div className="char__select__text__box">
      자신의 캐릭터를 선택하세요
      </div>
      <div className="char__select__box">
        
        <FontAwesomeIcon icon={faArrowLeft} className="char__select__arrow__left" />
        <div className="char__img__box">
        {CharInfoArray.map((char, index) => (
          <CharPict imgsrc={char.imgsrc} id={char.id} charSelectNumber={charSelectNumber} key={index} />
        ))}
        </div>
        
        {CharInfoArray.map((char) => (
          (char.id) === (charSelectNumber) ?
          <CharInfo key={char.id} id={char.id} name={char.name} job={char.job} age={char.age} ability={char.ability} imgsrc={char.imgsrc} abilityInfo={char.abilityInfo} />
          : null
        ))}
        <FontAwesomeIcon icon={faArrowRight} className="char__select__arrow__right" />
      </div>
      
    </div>
  )
}

export default CharSelect;