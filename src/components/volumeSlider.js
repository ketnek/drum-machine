import React from "react";
import './volumeSlider.css';


export const VolumeSlider = ({ setVolume }) => {

  const handleVolume = (e) => {
    setVolume(e.target.value / 100);
  }

  return (
    <div id="volumeSliderContainer">
      <input onChange={(e) => handleVolume(e)} id="volumeSlider" type='range' />
    </div>
  );
}