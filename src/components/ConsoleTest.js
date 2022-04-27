import React, { useState, useEffect, useContext, useRef } from "react";
import RiddlerPrompt from "./RiddlerPrompt";
import { RiddleContext } from "../App";
import UserPrompt from "./UserPrompt";
import InitialQuery from "./InitialQuery";
import UseOnEnter from "./UseOnEnter";
import MapConsoleOutput from "./MapConsoleOutput";

function Console() {
  const riddleContext = useContext(RiddleContext);
  const [continueRiddle, setcontinueRiddle] = useState("");
  let [maxRiddleCount, setMaxRiddleCount] = useState(0);
  const [currentRiddleCount, setCurrentRiddleCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  const [input, setInput] = useState("");
  const [isCorrect, count, onEnter, consoleOutput] = UseOnEnter();
  const inputText = useRef();

  useEffect(() => {
    setMaxRiddleCount(riddleContext.riddleState.riddle.length);
  }, []);

  useEffect(() => {
    if (inputText.current) {
      inputText.current.value = "";
      inputText.current.focus();
    }
    setCurrentRiddleCount(count);
  });

  const carryOnRiddle = (value) => {
    setcontinueRiddle(value);
  };

  // const getRandomRiddle = () => {
  //   const arrayCopy = [];
  //   arrayCopy.push(...riddleContext.riddleState.riddle);
  //   console.log(riddleContext.riddleState.riddle);
  //   console.log(arrayCopy);
  //   if (arrayCopy.length >= 1) {
  //     const randomNum = Math.floor(Math.random() * arrayCopy.length);
  //     arrayCopy.splice(randomNum, 1);
  //     console.log(randomNum, arrayCopy);
  //   }
  // };

  return (
    <div className="console">
      {/* <button onClick={getRandomRiddle}>click me</button> */}
      <InitialQuery carryOnRiddle={carryOnRiddle} />
      {continueRiddle === "Y" && (
        <MapConsoleOutput consoleOutput={consoleOutput} />
      )}

      {continueRiddle === "Y" &&
        (count < maxRiddleCount ? (
          <div>
            <div>
              <UserPrompt />
              <input
                type="text"
                ref={inputText}
                value={input}
                onChange={(event) => setInput(event.target.value.toUpperCase())}
                onKeyDown={({ target: { value }, key }) => onEnter(value, key)}
              />
            </div>
          </div>
        ) : (
          (console.log(
            "current riddle count greater thatn max riddle count",
            currentRiddleCount,
            maxRiddleCount
          ),
          (
            <span>
              <span className="downloadLink">
                <br />
                <RiddlerPrompt />
                <span>
                  BEWARE OF ABSOLUTE POWER. IT CORRUPTS UNCONDITIONALLY
                </span>
                <br />
                <br />
                <RiddlerPrompt />
                <a href="know_what_i_know.zip" download>
                  [CLICK HERE TO DOWNLOAD REWARD]
                </a>
              </span>
              <span className="outro">
                <br />
                <RiddlerPrompt />
                <span>{riddleContext.riddleState.outro[0].q}</span>
                <br />
              </span>
            </span>
          ))
        ))}
    </div>
  );
}

export default Console;
