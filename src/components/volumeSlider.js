import React from "react";
import './volumeSlider.css';


export const VolumeSlider = ({ setVolume, powerState }) => {

  const handleVolume = (e) => {

    !powerState
      ? setVolume(0)
      : setVolume(e.target.value / 100);
  }

  return (
    <div id="volumeSliderContainer">
      <input onChange={(e) => handleVolume(e)} id="volumeSlider" type='range' />
    </div>
  );
}