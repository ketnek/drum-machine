import React from "react";
import './drumButton.css'

export const DrumButton = ({ letter, name, link }) => {
  return (
    <button className="drum-pad" id={name}>
      {letter}
      <audio className='clip' id={letter} src={link} />
    </button>
  );
}