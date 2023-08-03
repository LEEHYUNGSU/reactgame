/*
  Character settings
*/

import man01pic from '../images/person/인물사진/남1.png';
import man02pic from '../images/person/인물사진/남2.png';
import man03pic from '../images/person/인물사진/남3.png';
import man04pic from '../images/person/인물사진/남4.png';
import man05pic from '../images/person/인물사진/남5.png';
import man06pic from '../images/person/인물사진/남6.png';
import man07pic from '../images/person/인물사진/남7.png';

import woman01pic from '../images/person/인물사진/여1.png';
import woman02pic from '../images/person/인물사진/여2.png';
import woman03pic from '../images/person/인물사진/여3.png';
import woman04pic from '../images/person/인물사진/여4.png';
import woman05pic from '../images/person/인물사진/여5.png';
import woman06pic from '../images/person/인물사진/여6.png';

import skill01Img from '../images/skill/arrow.png';
import skill02Img from '../images/skill/cross.png';
import skill03Img from '../images/skill/eye.png';
import skill04Img from '../images/skill/hand.png';
import skill05Img from '../images/skill/kunai.png';
import skill06Img from '../images/skill/shield (1).png';
import skill07Img from '../images/skill/shield.png';
import skill08Img from '../images/skill/shuriken.png';
import skill09Img from '../images/skill/spades.png';
import skill10Img from '../images/skill/spikes.png';
import skill11Img from '../images/skill/sword (1).png';
import skill12Img from '../images/skill/sword.png';




export const Characters = {
  'char-1': {
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
    skillImg: skill01Img,
  },
  'char-2': {
    avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
    sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
    id: 1,
    name: '이근',
    age: 39,
    sex: 'male',
    imgsrc: man02pic,
    job: '전직 군인',
    ability: '가짜사나이',
    abilityInfo: '아웃프런의 코인 가격 상승폭이 20% 증가합니다.',
    skillImg: skill02Img,
  },
  'char-3': {
    avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
    sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
      id: 2,
      name: '허수',
      job: '전직 프로게이머',
      age: '22',
      ability: '소메이커',
      abilityInfo: '밀탱크의 속도가 20% 증가합니다.',
      sex: 'male',
      imgsrc: man03pic,
      skillImg: skill03Img,
  },
  'char-4': {
    avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
    sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
    id: 3,
    name: '강형욱',
    job: '전직 훈련사',
    age: '42',
    ability: '개짖는 소리좀 안나게 하라',
    abilityInfo: '윈디의 속도가 20% 증가합니다.',
    sex: 'male',
    imgsrc: man04pic,
    skillImg: skill04Img,  
  },
  'char-5': {
    avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
    sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
    id: 4,
    name: '김도윤',
    job: '전직 퍼블리셔',
    age: '29',
    ability: '디자인 마스터',
    abilityInfo: '코딩와플의 코인 가격 상승폭이 20% 증가합니다',
    sex: 'male',
    imgsrc: man07pic,
    skillImg: skill05Img,
  },
  'char-6': {
    avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
    sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png', 
    id: 5,
    name: '이혜인',
    job: '전직 연예인',
    age: '15',
    ability: '뉴진스',
    abilityInfo: '날쌩마의 속도가 20% 증가합니다',
    sex: 'female',
    imgsrc: woman02pic,
    skillImg: skill06Img,
  },
  'char-7':   {
    avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
    sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
    id: 6,
    name: '장원영',
    job: '전직 댄서',
    age: '18',
    ability: '아이즈원',
    abilityInfo: '파오리의 속도가 20% 증가합니다',
    sex: 'female',
    imgsrc: woman03pic,
    skillImg: skill07Img,
  },
  'char-8': {
    avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
    sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
    id: 7,
    name: '이서아',
    job: '전직 트레이더',
    age: '37',
    ability: '존버',
    sex: 'female',
    abilityInfo: '코인 판매시 판매 가격의 20%를 더 받습니다',
    imgsrc: woman04pic,
    skillImg: skill08Img,
  },
  'char-9': {
    avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
    sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
    id: 8,
    name: '윤지아',
    job: '전직 간호사',
    age: '26',
    ability: '의료보험',
    abilityInfo: '코인의 떡락확률을 2배로 감소시킵니다',
    imgsrc: woman05pic,
    skillImg: skill09Img,
  },
  'char-10': {
    avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
    sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
    id: 9,
    name: '서아린',
    job: '전직 스타일리스트',
    age: '26',
    ability: '스타일리시',
    abilityInfo: '코드포테이토 코인을 10개 가지고 시작합니다',
    imgsrc: woman06pic,
    skillImg: skill10Img,
  },
  'char-11': {
    avatar: 'https://i.ibb.co/9TdGJmQ/char-3.png',
    sprite: 'https://i.ibb.co/sPLD0fV/char-3.png',
    id: 10,
    name: '김혁규',
    job: '전직 프로게이머',
    age: '28',
    ability: '중꺽마',
    abilityInfo: '코인의 떡상확률을 2배로 합니다',
    imgsrc: man05pic,
    skillImg: skill11Img,
  },
  'char-12': {
    avatar: 'https://i.ibb.co/7zwK9vG/char-1.png',
    sprite: 'https://i.ibb.co/ry9mJ9f/char-1.png',
    id: 11,
    name: '소주연',
    job: '전직 의사',
    age: '29',
    ability: '낭만닥터',
    abilityInfo: '코인이 상장폐지되어도 보유코인갯수를 유지합니다',
    imgsrc: woman01pic,
    skillImg: skill12Img,
  },    

};
