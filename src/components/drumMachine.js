import React from "react";
import './drumMachine.css';
import { ControllArea } from "./controllArea";
import { DrumPad } from "./drumPad";


export const DrumMachine = ({ sounds }) => {
  return (
    <div id="drum-machine">
      <DrumPad sounds={sounds} />
      <ControllArea />
    </div>
  );
}