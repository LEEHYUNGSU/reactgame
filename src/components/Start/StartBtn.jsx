function StartBtn ({content, id, selectedBtn }){
  return(
    <div className={selectedBtn === id ? 'start__button__selected' : 'start__button' }>
      {content}
    </div>
  )
}

export default StartBtn;