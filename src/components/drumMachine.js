import React, { useState } from "react";
import './drumMachine.css';
import { ControllArea } from "./controllArea";
import { DrumPad } from "./drumPad";


export const DrumMachine = ({ sounds }) => {
  const [displayMessage, setMessage] = useState('');
  const [powerState, setPowerState] = useState(true);
  const [audioVolume, setVolume] = useState(0.5);
  const [bankState, setBankState] = useState(true);



  return (
    <div id="drum-machine">
      <DrumPad
        sounds={sounds}
        setMessage={setMessage}
        powerState={powerState}
        audioVolume={audioVolume} />
      <ControllArea
        displayMessage={displayMessage}
        setVolume={setVolume}
        powerState={powerState}
        bankState={bankState}
        setBankState={setBankState}
        setPowerState={setPowerState}
      />
    </div>
  );
}