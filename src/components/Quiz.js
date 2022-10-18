import React, { useContext, useState } from "react";
import { QuizContext } from "../Helper/Contexts";
import { Questions } from "../Helper/QuestionBank";
import "../App.css";

const Quiz = () => {
  const { score, setScore, setGamestate } = useContext(QuizContext);

  const [current, setCurrent] = useState(0);
  const [optionchosen, setOptionchosen] = useState("");
  const nextQuestion = () => {
    if (Questions[current].answer === optionchosen) {
      setScore(score + 1);
    }

    setCurrent(current + 1);
  };
  const finishQuiz = () => {
    if (Questions[current].answer === optionchosen) {
      setScore(score + 1);
    }
    setGamestate("endscreen");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[current].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionchosen("A")}>
          {Questions[current].optionA}
        </button>
        <button onClick={() => setOptionchosen("B")}>
          {Questions[current].optionB}
        </button>
        <button onClick={() => setOptionchosen("C")}>
          {Questions[current].optionC}
        </button>
        <button onClick={() => setOptionchosen("D")}>
          {Questions[current].optionD}
        </button>
      </div>
      {current === Questions.length - 1 ? (
        <button onClick={finishQuiz}>finish quiz</button>
      ) : (
        <button onClick={nextQuestion}>next question</button>
      )}
    </div>
  );
};

export default Quiz;
