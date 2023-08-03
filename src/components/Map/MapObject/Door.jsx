// import DoorImage from '../../../images/object/Door1.png';


import DoorImage2 from '../../../images/object/door5.png';

function Door () {
  return(
    <div className="door__container">
      <div className='door_img' style={{backgroundImage: `url(${DoorImage2})`, width: "32px", height: "32px", backgroundPosition: "0px 0px", backgroundRepeat: 'no-repeat', zIndex: '1000' }}>

      </div>
    </div>
  )
}


export default Door;


