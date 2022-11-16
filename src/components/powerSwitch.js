import React from "react";
import { ToggleSwitch } from "./toggleSwitch";


export const PowerSwitch = ({ setPowerState }) => {

  const handleClick = (e) => {
    e.target.checked
      ? setPowerState(false)
      : setPowerState(true)
  }

  return (
    <ToggleSwitch
      id='powerSwitch'
      headline='Power'
      handleClick={handleClick} />
  );
}