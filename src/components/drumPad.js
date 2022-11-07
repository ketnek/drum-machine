import React from "react";
import './drumPad.css'
import { DrumButton } from "./drumButton";


export const DrumPad = ({ sounds }) => {
  const buttons = sounds.map((sound) => {
    return (
      <DrumButton key={sound.key} letter={sound.key} name={sound.name} link={sound.link} />
    );
  });
  return (
    <div id="drumPad">
      {buttons}
    </div>

  );
}