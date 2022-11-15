import React from "react";
import { ToggleSwitch } from "./toggleSwitch";


export const BankSwitch = ({ bankState, setBankState }) => {

  const handleClick = (e) => {
    if (e.target.id === 'bankSwitch' && bankState) {
      setBankState(false);
    } else {
      setBankState(true);
    }
  }

  return (
    <ToggleSwitch
      id='bankSwitch'
      headline='Bank'
      handleClick={handleClick}
    />
  );
}