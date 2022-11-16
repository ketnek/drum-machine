import React from "react";
import { ToggleSwitch } from "./toggleSwitch";


export const BankSwitch = ({ setBankState }) => {

  const handleClick = (e) => {
    e.target.checked
      ? setBankState(false)
      : setBankState(true)
  }

  return (
    <ToggleSwitch
      id='bankSwitch'
      headline='Bank'
      handleClick={handleClick} />
  );
}