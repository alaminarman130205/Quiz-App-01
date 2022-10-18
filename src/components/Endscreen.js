import React, { useContext } from "react";
import { QuizContext } from "../Helper/Contexts";
import { Questions } from "../Helper/QuestionBank";

const Endscreen = () => {
  const { score, setScore, setGamestate } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGamestate("manu");
  };

  return (
    <div className="endscreen">
      <h1>this quiz is ending</h1>
      <h3>
        {score} / {Questions}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Endscreen;
