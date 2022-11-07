import React from "react";
import './toggleSwitch.css';


export const ToggleSwitch = ({ name }) => {
  return (
    <div id="toggleSwitch">
      <h2>{name}</h2>
      <label id="switch">
        <input type='checkbox'></input>
        <span className="slider"></span>
      </label>
    </div>
  );
}