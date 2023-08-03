import React, { useState, useEffect } from 'react';
import { allQuestionsBank } from './QuizBank';

const QuizPage = ({mapPage, setMapPage, setHadMoney, setQuizPage}) => {
  // 퀴즈 문제들
  
  const allQuestions = allQuestionsBank;
  const totalQuestionsCount = allQuestions.length;

  const questionsPerPage = 10; // 한 페이지에 출력될 문제 수
  const [questionPage, setQuestionPage] = useState(0); // 현재 퀴즈 페이지 인덱스

  // 상태 변수 초기화
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [quizStart, setQuizStart] = useState(false);

  // 현재 페이지에 해당하는 문제들 가져오기
  // const startIndex = Math.floor(Math.random() * (totalQuestionsCount - 10));

  // const endIndex = startIndex + questionsPerPage;
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    setQuestions(allQuestions.sort(() => 0.5 - Math.random()).slice(0, questionsPerPage));
  }, []); 

  // 방향키 조작을 위한 이벤트 핸들러 등록
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' && quizStart) {
        setSelectedOptionIndex((prevIndex) =>
          Math.min(prevIndex + 1, questions[currentQuestionIndex].options.length - 1)
        );
      } else if (e.key === 'ArrowUp' && quizStart) {
        setSelectedOptionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (e.key === 'Enter' && quizStart) {
        handleAnswerSelect(questions[currentQuestionIndex].options[selectedOptionIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, selectedOptionIndex, quizStart]);

  // 사용자가 답을 선택했을 때 호출되는 함수
  const handleAnswerSelect = (answer) => {
    setUserAnswers([...userAnswers, answer]);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(0);
    } else {
      setShowResult(true);
    }
  };

  // 결과를 계산하는 함수
  const calculateResult = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };


  useEffect(() => {
    if (userAnswers.length === 10 && showResult) {
      setUserAnswers([]);
    }
  }, [userAnswers, showResult]);

  // 엔터를 입력하면 퀴즈스타트로 넘어간다.
  const QuizStartEnter = (event) => {
    if (event.key === 'Enter' && !quizStart && userAnswers.length === 0 && !showResult) {
      setQuizStart(true);
      console.log('QuizStartEnter');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', QuizStartEnter);
    return () => document.removeEventListener('keydown', QuizStartEnter);
  }, []);

  const QuizQuitEsc = (event) => {
    if (event.key === 'Escape' && quizStart) {
      setMapPage(true);
      setQuizPage(false);
      if (calculateResult() === 10) {
        setHadMoney((prev) => prev + 316000);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', QuizQuitEsc);
    return () => document.removeEventListener('keydown', QuizQuitEsc);
  }, [quizStart]);

  return (
    <div>
      {!quizStart ? (
        <div className='before__quiz__start__container'>
          <div className='before__quiz__start__info'>
          다음은 리액트 및 자바스크립트에 관한 퀴즈입니다. 문제를 잘 읽고, 키보드로 답을 선택하여 대답해주세요. 
          <br/>
          <br/>
          정답률이 70퍼센트가 넘을 경우, 316000원을 받게 됩니다!
          </div>
          <div className='before__quiz__start__info2'>
          문제는 총 100문제가 존재하며, 그 중에서 10문제가 랜덤하게 출제됩니다! 그럼 시작해볼까요? 엔터를 입력하면 퀴즈를 푸는 페이지로 넘어가게 됩니다!
          </div>
          
        </div>
      ) : (
        <>
          {showResult ? (
            <div className='quiz__result__container'>
              <h1 className='quiz__result__info1'>당신이 푼 프론트엔드 퀴즈의 결과는?????<br/>
              당신이 퀴즈를 맞춘 개수는 : {calculateResult()}개입니다.
              </h1>
              <p className='quiz__result__info2'>
                
                ESC키를 누르면 원래의 맵으로 돌아가게됩니다.
              </p>
            </div>
          ) : (
            <div className='quiz__question__container'>
              <h1>프론트엔드 퀴즈</h1>
              <p className='quiz__question__p'>문제 {currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}</p>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className='quiz__question__div'>
                  <button className='quiz__question__btn'
                    style={{ backgroundColor: selectedOptionIndex === index ? 'black' : 'white', color: selectedOptionIndex === index ? 'white' : 'black' }}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    {option}
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizPage;



// 우선은 다시 푸는 플로우는 넘어가도록 하고, 100문제를 만들어서 새로 입장할 때 마다 다시풀도록 하고, 문제 푸는 수를 5개로 늘리자.







// const QuizRestartEnter = (event) => {
//   if (event.key === 'Space' && quizStart && userAnswers.length === 3) {
//     // 사용자에게 문제를 다시 풀지 물어보는 안내문을 출력
//     alert("퀴즈를 다시 풀 준비가 되셨나요? 엔터를 누르면 퀴즈가 다시 시작됩니다.");
//     setShowResult(false);
//     setUserAnswers([]);
//     setCurrentQuestionIndex(0);
//     setSelectedOptionIndex(0);
//     setQuizStart(false); // 마지막에 설정하여 안내문이 먼저 출력되도록 함
//     console.log('QuizRestartEnter');
//   }
// };

// useEffect(() => {
//   window.addEventListener('keydown', QuizRestartEnter);
//   return () => window.removeEventListener('keydown', QuizRestartEnter);
// });
