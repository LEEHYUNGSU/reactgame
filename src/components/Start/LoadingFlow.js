import { useState, useEffect } from "react";

function LoadingFlow({ loadingFlow, setLoadingFlow, charPage, setCharPage, endingFlow, textToShow, setTextToShow, endingMoney, hadMoney }) {
  const [visibleText, setVisibleText] = useState([]);
  const [enterVisible, setEnterVisible] = useState(false);
  
  useEffect(() => {
    let currentIndex = 0;
    let timer;

    if (loadingFlow && !charPage) {
      timer = setInterval(() => {
        setVisibleText((prevText) => {
          if (currentIndex < textToShow.length) {
            currentIndex++;
            return textToShow.slice(0, currentIndex);
          } else {
            setEnterVisible(true);
            clearInterval(timer);
            return prevText;
          }
        });
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [loadingFlow, charPage]);

  const LoadingFlowEnter = (event) => {
    if (event.key === "Enter" && loadingFlow && !charPage && !endingFlow && (hadMoney < endingMoney) ) {
      setLoadingFlow(false);
      setCharPage(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", LoadingFlowEnter);
    return () => document.removeEventListener("keydown", LoadingFlowEnter);
  }, [loadingFlow, endingFlow, hadMoney, endingMoney]);

  return (
    <div className="loading__flow__container">
      
      {visibleText.map((text, index) => (
        <div key={index}>
          {text}
          <br />

        </div>
      ))}

        {enterVisible ? <div className="Enter__visible">계속하시려면 엔터를 누르세요</div> : null} 
    </div>
  );
};

export default LoadingFlow;
