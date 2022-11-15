import React from "react";
import './display.css';


export const Display = ({ displayMessage, powerState }) => {

  const message =
    powerState
      ? displayMessage
      : 'OFF';

  return (
    <div id="display">
      <p id="message">{message}</p>
    </div>
  );
}