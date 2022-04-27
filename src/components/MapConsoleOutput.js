import React, { useRef, useEffect } from "react";
import RiddlerPrompt from "./RiddlerPrompt";
import UserPrompt from "./UserPrompt";

const MapConsoleOutput = ({ riddle, userInput, consoleOutput }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="console-output">
      {consoleOutput.map((item, index) => (
        <div key={index}>
          {item.split(" ").length >= 5 ? (
            <div className="riddlerPromptMap">
              <span>
                <RiddlerPrompt />
              </span>
              <span ref={scrollRef}>{item}</span>
            </div>
          ) : (
            <div className="userInputMap">
              <span>
                <UserPrompt />
              </span>
              <span>{item}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MapConsoleOutput;
