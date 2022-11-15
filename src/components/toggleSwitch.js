import React from "react";
import './toggleSwitch.css';


export const ToggleSwitch = ({ id, headline, handleClick }) => {

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