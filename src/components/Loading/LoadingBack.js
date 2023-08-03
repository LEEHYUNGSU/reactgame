import { useEffect, useState } from "react";

function LoadingBack({loadingBack, setLoadingBack}){
  const [visibleText, setVisibleText] = useState([]);
  const textToShow = [
   'l',
   'o',
   'a',
   'd',
   'i',
   'n',
   'g',
   '.',
   '.',
   '.',
   '.',
   '.',
   '.',
   '.',
  ];

  useEffect(() => {
    let currentIndex = 0;
    let timer;

    if (loadingBack) {
      timer = setInterval(() => {
        setVisibleText((prevText) => {
          if (currentIndex < textToShow.length) {
            currentIndex++;
            return textToShow.slice(0, currentIndex);
          } else {
            clearInterval(timer);
            setLoadingBack(false);
            return prevText;
          }
        });
      }, 1500);
    }

    return () => clearInterval(timer);
  }, [loadingBack]);



  return(
    <>
      <div className='loading__background__container'>
        <div className="loading__text__container">
          {visibleText}
        </div>
      </div>
    </>
  )
}

export default LoadingBack;