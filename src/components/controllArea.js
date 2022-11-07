import React from "react";
import './controllArea.css';
import { Display } from "./display";
import { ToggleSwitch } from "./toggleSwitch";
import { VolumeSlider } from "./volumeSlider";


export const ControllArea = (props) => {
  return (
    <div id="controllArea">
      <ToggleSwitch name='Power' />
      <Display />
      <VolumeSlider />
      <ToggleSwitch name='Bank' />
    </div>

  );
}