import React from "react";
import './controllArea.css';
import { BankSwitch } from "./bankSwitch";
import { Display } from "./display";
import { PowerSwitch } from "./powerSwitch";
import { VolumeSlider } from "./volumeSlider";


export const ControllArea = (
  {
    displayMessage,
    setVolume,
    powerState,
    setBankState,
    setPowerState
  }
) => {

  return (
    <div id="controllArea">
      <PowerSwitch
        setPowerState={setPowerState} />
      <Display
        powerState={powerState}
        displayMessage={displayMessage} />
      <VolumeSlider
        setVolume={setVolume} />
      <BankSwitch
        setBankState={setBankState} />
    </div>
  );
}