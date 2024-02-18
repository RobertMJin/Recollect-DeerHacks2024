import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import './App.css';

export default function TypeTest() {
  let location = useLocation();
  const text = location.state.data.output;
  let video = location.state.videodata;
  const [textToType] = useState(text);
  const [typedText, setTypedText] = useState("");
  const [timer, setTimer] = useState();
  const [elapsedMs, setElapsedMs] = useState(0);
  const [started, setStarted] = useState(false);
  const [wpm, setWpm] = useState(0);

  const parts = useMemo(() => {
    const splitTextToType = textToType.split("");
    let endIndexMatch = 0;
    for (const [index, s] of splitTextToType.entries()) {
      if (s !== typedText[index]) {
        endIndexMatch = index;
        break;
      }
    }
    return {
      matchedPart: textToType.slice(0, endIndexMatch),
      unmatchedPart: textToType.slice(endIndexMatch)
    };
  }, [textToType, typedText]);

  const start = () => {
    const timer = setInterval(() => {
      setElapsedMs((elapsedMs) => elapsedMs + 1);
      if (!started) {
        setStarted(true);
      }
    }, 1000);
    setTimer(timer);
  };

  const restart = () => {
    setStarted(started);
    setElapsedMs(0);
    setTypedText("");
  };

  useEffect(() => {
    if (parts.unmatchedPart.length === 1) {
      clearInterval(timer);
      setWpm(textToType.split(" ").length / (elapsedMs / (60 * 1000)));
    }
  }, [parts, textToType, timer, elapsedMs]);

  if (parts.unmatchedPart.length > 1) {
    return (
      <div>
        <div>
          <b>{parts.matchedPart}</b>
          {parts.unmatchedPart}
        </div>
        <textarea className="textArea"
          disabled={!started}
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          style={{ width: "90vw", height: "30px" }}
        ></textarea><br />
        <button onClick={start}>start</button>
      </div>
    );
  } else {
    return (
      <div>
        Your words per minute is {wpm}
        <button onClick={restart}>restart</button>
      </div>
    );
  }
}