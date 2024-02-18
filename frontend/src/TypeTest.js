import React, { useEffect, useMemo, useState } from "react";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tellus tortor. ";

export default function TypeTest() {
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
        <button onClick={start}>start</button>
        <textarea
          disabled={!started}
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          style={{ width: "90vw", height: "300px" }}
        ></textarea>
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