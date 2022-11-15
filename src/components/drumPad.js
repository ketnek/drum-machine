import React from "react";
import './drumPad.css'
import { DrumPadGenerator } from "./drumPadGenerator";


export const DrumPad = (
  {
    sounds,
    setMessage,
    audioVolume,
    powerState
  }
) => {

  return (
    <div id="drumPad">
      <DrumPadGenerator
        sounds={sounds}
        setMessage={setMessage}
        audioVolume={audioVolume}
        powerState={powerState} />
    </div>
  );
}