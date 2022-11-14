import React from "react";
import './toggleSwitch.css';


export const ToggleSwitch = (
  {
    id,
    headline,
    bankState,
    powerState,
    setBankState,
    setPowerState
  }
) => {


  const handleClick = (e) => {
    if (e.target.id === 'powerSwitch' && powerState) {
      setPowerState(false);
    } else if (e.target.id === 'powerSwitch' && !powerState) {
      setPowerState(true);
    } else if (e.target.id === 'bankSwitch' && bankState) {
      setBankState(false);
    } else {
      setBankState(true);
    }
  }

  return (
    <div className="switch">
      <h2>{headline}</h2>
      <label className="toggleSwitch">
        <input
          id={id}
          onClick={handleClick}
          type='checkbox'>
        </input>
        <span className="slider"></span>
      </label>
    </div>
  );
}