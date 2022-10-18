import { useState, useContext } from "react";
import "./App.css";
import Endscreen from "./components/Endscreen";
import Mainmenu from "./components/Mainmenu";
import Quiz from "./components/Quiz";
import { QuizContext } from "./Helper/Contexts";

function App() {
  const [gamestate, setGamestate] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>quiz app</h1>
      <QuizContext.Provider
        value={{ gamestate, setGamestate, score, setScore }}
      >
        {gamestate === "menu" && <Mainmenu></Mainmenu>}
        {gamestate === "quiz" && <Quiz></Quiz>}
        {gamestate === "endscreen" && <Endscreen></Endscreen>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
