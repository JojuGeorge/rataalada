import "./App.css";
import React, { useState, useReducer } from "react";
import Console from "./components/Console";
import ConsoleTest from "./components/ConsoleTest";
import FirstPage from "./components/FirstPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const initialState = {
  initialQuery: [
    {
      q0: "SO YOU HAVE COME BACK I SEE.",
      q1: "WANT TO PLAY A GAME [Y/N]",
      q2: "THERE CAN'T ALL BE WINNERS. GIVE IT SOME THOUGHT AND TRY AGAIN.",
      q3: "REFRESH THE PAGE TO BEGIN AGAIN.",
    },
  ],
  riddle: [
    {
      q: ["WHAT'S BLACK AND BLUE AND DEAD ALL OVER ?"],
      a: "BATMAN",
      c: ">>> [ B----- ]",
    },
    {
      q: "THOSE WHO MAKE ME ARE LIKELY TO BREAK ME ?",
      a: "LAW",
      c: ">>>  [ L-- ]",
    },
    {
      q: "I AM FIRST A FRAUD OR A TRICK. OR PERHAPS A BLEND OF THE TWO. THAT'S UPTO YOUR MISINTERPRETATION ? ",
      a: "CONFUSION",
      c: ">>> [ C-------N ]",
    },
    {
      q: "I CAN BE EASY OR A DEAD END. CAREFUL WHEN YOU CROSS ME ?",
      a: "STREET",
      c: ">>> [ S----- ]",
    },
    {
      q: "WHAT DOES A LIAR DO WHEN HE'S DEAD ?",
      a: "HE LIES STILL",
      c: ">>> [ H- L--- S---- ]",
    },
    {
      q: "IT CAN BE CRUEL, POETIC OR BLIND, BUT WHEN IT'S DENIED, IT'S VIOLENCE YOU MAY FIND ?",
      a: "JUSTICE",
      c: ">>> [ J------ ]",
    },
    {
      q: [
        "I GREW UP FROM A SEED, TOUGH AS A WEED...",
        "BUT IN A MANSION, IN A SLUM...",
        "I'LL NEVER KNOW WHERE I COME FROM.",
        "DO YOU KNOW WHAT I AM ?",
      ],
      a: "ORPHAN",
      c: ">>> [ O----- ]",
    },
    {
      q: "THE LESS OF THEM YOU HAVE, THE MORE ONE IS WORTH ? ",
      a: "FRIEND",
      c: ">>> [ F----D ]",
    },
    {
      q: "FEAR HE WHO HIDES BEHIND ONE ?",
      a: "MASK",
      c: ">>> [ M--- ]",
    },
    {
      q: "WHAT WAS NEW, IS NEW AGAIN. REBIRTH, RESTORATION, REFORMATION ?",
      a: "RENEWAL",
      c: ">>> [ R------ ]",
    },
    {
      q: "IF YOU ARE JUSTICE, PLEASE DO NOT LIE. WHAT IS THE PRICE FOR YOUR BLIND  EYE ?",
      a: "BRIBE",
      c: ">>> [ B---- ]",
    },
    {
      q: "THE FAMOUS CRAVE ME. OTHERS PROTECT THEMSELVES FROM ME. NO MATTER HOW YOU DEFINE ME, I ALWAYS END UP WITH CERTAINTY ?",
      a: "EXPOSURE",
      c: ">>> [ E------E ]",
    },
    {
      q: "WHILE IT SHOULDN'T BE A CONTROVERSIAL POLICY, MANY OF GOTHAM'S ELITE PREFER TO DO THE OPPOSITE OF WHAT IS BEST ?",
      a: "HONESTY",
      c: ">>> [ H------ ]",
    },
  ],
  falseAnswer: [
    {
      q: "NOT QUITE - BETTER LUCK THEN.",
    },
    {
      q: "WITH ANSWERS LIKE THAT, NO WONDER GOTHAM SUFFERS.",
    },
    {
      q: "THEY CAN'T ALL BE WINNERS. GIVE IT SOME THOUGHT AND TRY AGAIN.",
    },
    {
      q: "POWER HAS CORRRUPTED YOU, AND YOUR ANSWERS. THINK A LITTLE HARDER.",
    },
    {
      q: "YOU SCOUR THE INTERNET FOR THE TRUTH, BUT YOU STILL NEED TO ANSWER ME.",
    },
    {
      q: "WHEN YOU GUESS WRONT, I GUESS YOU'D BETTER TRY AGAIN.",
    },
    {
      q: "HELL IS AN UNSOLVED RIDDLE. BETTER LUCK NEXT TIME.",
    },
    {
      q: "THAT WAS A WILD GUESS. IF YOU WANT TO WIN, YOU MUST TRY A LITTLE HARDER.",
    },
    {
      q: "QUESTION EVERYTHING - INLCUDING YOUR ANSWER. TRY AGAIN..",
    },
    {
      q: "SEARCHING FOT THE ANSWER, ARE WE? CHEATERS ALWAYS REVEAL THEMSELVES.",
    },
  ],
  trueAnswer: [
    {
      q: "A CORRECT ANSWER LEADS YOU CLOASER TO FULFILLMENT. NOW, HERE'S ANOTHER RIDDLE. HERE'S ANOTHER.",
    },
    {
      q: "PRECISELY. NOW LET'S SEE IF YOU HAVE WHAT IT TAKES TO CORRECTLY ANSWER ANOTHER.",
    },
    {
      q: "YOU'RE GOOD. ON TO THE NEXT ONE.",
    },
    {
      q: "YOU MAY HAVE GOTTEN THIS ONE, BUT ONLY I HAVE ALL THE ANSWERS. HERE'S ANOTHER.",
    },
    {
      q: "WHEN SHADOWS FALL, THE TRUTH RISES. YOU ARE CORRECT. HERE'S ANOTHER.",
    },
    {
      q: "YOU'RE QUITE THE THINKER. NOW, THINK ABOUT THIS NEXT ONE",
    },
  ],
  outro: [
    {
      q: "THAT'S ENOUGH FOR TODAY. COME BACK LATER AND MORE WILL BE REVEALED -?-",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.payload) {
    case state.riddle[0].a:
      console.log("correct");
      return state;
    default:
      console.log("incorrect");
      return state;
  }
};

export const RiddleContext = React.createContext();

function App() {
  const [riddle, dispatch] = useReducer(reducer, initialState);

  return (
    <Router basename="/rataalada">
      <RiddleContext.Provider
        value={{ riddleState: riddle, riddleDispatch: dispatch }}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="console" element={<Console />} />
          </Routes>
        </div>
      </RiddleContext.Provider>
    </Router>
  );
}

export default App;
