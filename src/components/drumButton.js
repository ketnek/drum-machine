import React from "react";
import './drumButton.css'


export const DrumButton = ({ letter, name, link, audioVolume, handleClick }) => {

  return (
    <button onClick={handleClick} className="drum-pad" id={name}>
      {letter}
      <audio volume={audioVolume} className='clip' id={letter} src={link} />
    </button>
  );
}