import React from "react";
import { ToggleSwitch } from "./toggleSwitch";


export const PowerSwitch = ({ powerState, setPowerState }) => {

  const handleClick = (e) => {
    if (e.target.id === 'powerSwitch' && powerState) {
      setPowerState(false);
    } else {
      setPowerState(true);
    }
  }

  return (
    <ToggleSwitch
      id='powerSwitch'
      headline='Power'
      handleClick={handleClick}
    />
  );
}