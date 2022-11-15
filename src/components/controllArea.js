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
    bankState,
    powerState,
    setBankState,
    setPowerState
  }
) => {

  return (
    <div id="controllArea">
      <PowerSwitch
        powerState={powerState}
        setPowerState={setPowerState} />
      <Display
        powerState={powerState}
        displayMessage={displayMessage} />
      <VolumeSlider
        setVolume={setVolume} />
      <BankSwitch
        bankState={bankState}
        setBankState={setBankState} />
    </div>
  );
}