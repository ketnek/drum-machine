import React from "react";
import './volumeSlider.css';


export const VolumeSlider = (props) => {
  return (
    <div id="volumeSliderContainer">
      <input id="volumeSlider" type='range' />
    </div>
  );
}