import React from "react";
import './controllArea.css';
import { Display } from "./display";
import { ToggleSwitch } from "./toggleSwitch";
import { VolumeSlider } from "./volumeSlider";


export const ControllArea = ({ displayMessage, setVolume, bankState, powerState, setBankState, setPowerState }) => {

  return (
    <div id="controllArea">
      <ToggleSwitch
        id='powerSwitch'
        headline='Power'
        powerState={powerState}
        setPowerState={setPowerState}
      />
      <Display powerState={powerState} displayMessage={displayMessage} />
      <VolumeSlider powerState={powerState} setVolume={setVolume} />
      <ToggleSwitch
        id='bankSwitch'
        headline='Bank'
        bankState={bankState}
        setBankState={setBankState}
      />
    </div>
  );
}