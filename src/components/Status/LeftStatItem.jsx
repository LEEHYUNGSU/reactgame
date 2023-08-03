function LeftStatItem({item, id, leftSelected}){


  return(
    <div className={id === leftSelected ? 'left__stat__item__selected' : 'left__stat__item'}>
      {item}
    </div>
  );
}

export default LeftStatItem;

