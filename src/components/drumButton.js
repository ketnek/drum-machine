import React, { useEffect } from "react";
import './drumButton.css'


export const DrumButton = ({ letter, name, link, setMessage, audioVolume, powerState }) => {

  // Keyboard controlling
  useEffect(() => {
    document.addEventListener('keypress',

      (e) => {
        const audioElement = document.getElementById(e.key.toUpperCase());

        // sets the volume and played the audio#
        !powerState
          ? audioElement.volume = 0
          : audioElement.volume = audioVolume;
        audioElement.play();

        // sets message for the display component
        !powerState
          ? setMessage('')
          : setMessage(audioElement.parentElement.id);

        // sets visual effect for the triggered button
        audioElement.parentElement.classList.add('keyPush');
        setTimeout(() => {
          audioElement.parentElement.classList.remove('keyPush');
        }, 200);
      })
  });

  // Mouse controlling
  const playAudio = (e) => {

    // sets the volume and played the audio
    !powerState
      ? e.target.children[0].volume = 0
      : e.target.children[0].volume = audioVolume;
    e.target.children[0].play();

    // sets message for the display component
    !powerState
      ? setMessage('')
      : setMessage(name);
  }

  return (
    <button onClick={playAudio} className="drum-pad" id={name}>
      {letter}
      <audio volume={audioVolume} className='clip' id={letter} src={link} />
    </button>
  );
}