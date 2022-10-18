import React, { useContext } from "react";
import { QuizContext } from "../Helper/Contexts";
import "../App.css";

const Mainmenu = () => {
  const { gamestate, setGamestate } = useContext(QuizContext);

  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGamestate("quiz");
        }}
      >
        start quiz
      </button>
    </div>
  );
};

export default Mainmenu;
