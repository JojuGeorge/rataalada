import React, { useState, useContext, useEffect } from "react";
import { RiddleContext } from "../App";

const UseOnEnter = () => {
  const riddleContext = useContext(RiddleContext);

  const [consoleOutput, setConsoleOutput] = useState([]);

  const [isCorrect, setIsCorrect] = useState(true);
  const [count, setCount] = useState(0);
  const [maxRiddleCount, setMaxRiddleCount] = useState(0);
  const [maxTrueAnswerCount, setMaxTrueAnswerCount] = useState("");
  const [maxFalseAnswerCount, setMaxFalseAnswerCount] = useState("");
  const [newRiddleArray, setNewRiddleArray] = useState([]);
  const [wrongAnsCount, setWrongAnsCount] = useState(0);
  let item = [];

  useEffect(() => {
    getRandomRiddle();

    setMaxTrueAnswerCount(riddleContext.riddleState.trueAnswer.length);
    setMaxFalseAnswerCount(riddleContext.riddleState.falseAnswer.length);
    setMaxRiddleCount(riddleContext.riddleState.riddle.length);
  }, []);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomRiddle = () => {
    const temp = riddleContext.riddleState.riddle.map((obj) => ({ ...obj }));
    const riddleArray = temp;
    let tempArr = [];
    for (let i = riddleArray.length; i >= 1; i--) {
      let randomNum = Math.floor(Math.random() * i);
      item = riddleArray.splice(randomNum, 1);
      tempArr.push(item[0]);
    }
    setNewRiddleArray(tempArr);
  };

  let num = 0;
  useEffect(() => {
    if (
      count < riddleContext.riddleState.riddle.length &&
      newRiddleArray.length > 0
    ) {
      setConsoleOutput(() => {
        // return consoleOutput.concat(riddleContext.riddleState.riddle[count].q);
        return consoleOutput.concat(newRiddleArray[count].q);
      });
    }
  }, [count, newRiddleArray]);

  const onEnter = (value, key) => {
    // const riddle = riddleContext.riddleState.riddle[count];
    const riddle = newRiddleArray[count];
    if (key === "Enter" && value.length >= 1) {
      if (riddle.a === value) {
        setIsCorrect(true);

        if (count < maxRiddleCount) {
          setCount((prevCount) => prevCount + 1);
        }

        setConsoleOutput(() =>
          consoleOutput.concat(
            value,
            riddleContext.riddleState.trueAnswer[
              getRandomInt(maxTrueAnswerCount)
            ].q
          )
        );
      } else {
        setIsCorrect(false);
        setWrongAnsCount((prevCount) => prevCount + 1);

        setConsoleOutput(() =>
          consoleOutput.concat(
            value,
            riddleContext.riddleState.falseAnswer[
              getRandomInt(maxFalseAnswerCount)
            ].q
          )
        );

        if (wrongAnsCount >= 3) {
          setConsoleOutput(() =>
            consoleOutput.concat(
              value,
              riddleContext.riddleState.falseAnswer[
                getRandomInt(maxFalseAnswerCount)
              ].q,
              riddle.q,
              "HERE IS A CLUE FOR YOU " + riddle.c
            )
          );
          setWrongAnsCount(0);
        }
      }
    }
  };

  return [isCorrect, count, onEnter, consoleOutput];
};

export default UseOnEnter;
