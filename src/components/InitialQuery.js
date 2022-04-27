import React, { useEffect, useState, useContext, useRef } from "react";
import { RiddleContext } from "../App";
import RiddlerPrompt from "./RiddlerPrompt";
import UserPrompt from "./UserPrompt";

function InitialQuery({ carryOnRiddle }) {
  const riddleContext = useContext(RiddleContext);
  const [continueRiddle, setContinueRiddle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const inputTextRef = useRef(null);

  const onEnter = (value, key) => {
    if (key === "Enter") {
      // setContinueRiddle(value);

      if (value === "Y" || value === "N") {
        setIsDisabled(true);
      }
    }
  };

  useEffect(() => {
    inputTextRef.current.focus();
  }, []);

  return (
    <div>
      <RiddlerPrompt />
      {riddleContext.riddleState.initialQuery[0].q0}
      <div>
        <RiddlerPrompt />
        {riddleContext.riddleState.initialQuery[0].q1}
        <div>
          <UserPrompt />
          <input
            type="text"
            ref={inputTextRef}
            value={continueRiddle}
            onChange={(event) =>
              setContinueRiddle(event.target.value.toUpperCase())
            }
            onKeyDown={({ target: { value }, key }) => {
              onEnter(value, key);
              carryOnRiddle(value);
            }}
            disabled={isDisabled}
            className="userInputInitial"
          />
        </div>
        {continueRiddle === "N" && isDisabled && (
          <span>
            <span>
              <RiddlerPrompt />
              {riddleContext.riddleState.initialQuery[0].q2}
            </span>
            <br />
            <span>
              <RiddlerPrompt />
              {riddleContext.riddleState.initialQuery[0].q3}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export default InitialQuery;
