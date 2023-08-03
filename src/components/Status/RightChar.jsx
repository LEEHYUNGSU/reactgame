import { Characters } from "../../config/CharacterModels";

function RightChar({rightSelected, selectedChar}){



  const selectedCharInfo = Characters[selectedChar];

  return(
    <div className={rightSelected ? 'right__status__character1__selected' : 'right__status__character1'}>
    <div className="right__status__image">
      <img src={selectedCharInfo.imgsrc} style={{width: '100%', height: '100%'}}   />
    </div>  
    <div className="right__status__info">
      <div className="right__status__name">
        이름 :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {selectedCharInfo.name}
      </div>
      <div className="right__status__job">
        직업 :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    {selectedCharInfo.job}    
      </div>
      <div className="right__status__job">
        나이 :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    {selectedCharInfo.age}    
      </div>
    </div>
</div>
  )
}


export default RightChar;

