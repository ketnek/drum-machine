import React, { useState } from "react";
import './drumMachine.css';
import { ControllArea } from "./controllArea";
import { DrumPad } from "./drumPad";


export const DrumMachine = ({ soundsBank1, soundsBank2 }) => {

  const [displayMessage, setMessage] = useState('');
  const [powerState, setPowerState] = useState(true);
  const [audioVolume, setVolume] = useState(0.5);
  const [bankState, setBankState] = useState(true);

  const selectedSoundBank =
    bankState
      ? soundsBank1
      : soundsBank2;

  return (
    <div id="drum-machine">
      <DrumPad
        sounds={selectedSoundBank}
        setMessage={setMessage}
        powerState={powerState}
        audioVolume={audioVolume} />
      <ControllArea
        displayMessage={displayMessage}
        setVolume={setVolume}
        powerState={powerState}
        setBankState={setBankState}
        setPowerState={setPowerState} />
    </div>
  );
}