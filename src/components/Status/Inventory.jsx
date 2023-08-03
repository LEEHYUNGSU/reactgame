import { useState, useEffect } from "react";
import HadItem from "./HadItem";
import { Characters } from "../../config/CharacterModels";

function Inventory({setInvenOpen, invenOpen, selectedChar}) {


  return(
    <div className="inventory__container">
      <div className="inventory__info">
        <img src={Characters[selectedChar].skillImg} style={{width: '200px', height: '200px'}} alt='skillImg' />
        &nbsp;&nbsp;&nbsp; 캐릭터의 특수능력 : {Characters[selectedChar].ability}
      </div>
      <div className="inventory__item">
        <div className="had__item__container">
         특수능력 설명 : {Characters[selectedChar].abilityInfo}
        </div>
      </div>
    </div>
  )
}


export default Inventory;