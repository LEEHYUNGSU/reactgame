import React, { useEffect, useState } from 'react';
import styles from './Map.module.css';


const Map = React.forwardRef(({ children, mapImage, mapMove, sizeX, sizeY, setStatusPage, statusPage, pos, selectedMap }, ref) => {
  const [mapX, setMapX] = useState(960);
  const [mapY, setMapY] = useState(960);

  const EscapeBtn = (event) => {
    if(event.key === 'Escape'){
      setStatusPage(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', EscapeBtn);
    return() => {
      document.removeEventListener('keydown', EscapeBtn);
    }
  }, []);


  
  useEffect(() => {
    setMapX(sizeX);
    setMapY(sizeY);
  }, [mapMove]);



  return(


   

<div
  style={{
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
  
  className='MapContainer'
>
  {mapX > 1600 && mapY > 960 ? (
    <div
      style={{
        width: `${mapX}px`,
        height: `${mapY}px`,
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        backgroundImage: `url('${mapImage}')`,
        backgroundSize: `${mapX}px ${mapY}px`,
        top: `-${pos.x}px`,
        left: `-${pos.y}px`,
      }}
      className='mapObject'
      ref={ref}
    >
      {children}

      
    </div>
  ) : (
    <div
      style={{
        width: `${mapX}px`,
        height: `${mapY}px`,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${mapImage}')`,
        backgroundSize: `${mapX}px ${mapY}px`,
        position: 'relative',
      }}
      className='mapObject'
      ref={ref}
    >
      {children}
    </div>
  )}
</div>


  
  )
}
);


// 오케이, 맵에 따른 데이터 배치를 완성했다. 얼마나 기쁜 일인가. 얼마나 보람찬 일인가. 얼마나 내 스스로 대견한가!!!!



  


export default Map;



  {/* <div
    ref={ref}
    id="game-map"
    className={styles.map}
    style={{
      backgroundImage: `url('${mapImage}')`,
      backgroundSize: `${mapX}px ${mapY}px`,
      width: `${mapX}px`,
      height: `${mapY}px`,
      backgroundRepeat: `no-repeat`,
      position: 'relative',
    }}
  >
    {children}
  </div> */}



  // <div
  //     style={{
  //       width: '100%',
  //       height: '100%',
  //       overflow: 'hidden',
  //       position: 'relative',
  //     }}
  //   >
  //     <div
  //       style={{
  //         width: `${mapWidth}px`,
  //         height: `${mapHeight}px`,
  //         position: 'absolute',
  //         top: `-${characterPosition.y}px`,
  //         left: `-${characterPosition.x}px`,
  //       }}