import React, { useEffect } from "react";
import { DrumButton } from "./drumButton";


export const DrumPadGenerator = (
  {
    sounds,
    setMessage,
    audioVolume,
    powerState
  }
) => {

  // Keyboard controlling
  useEffect(() => {
    document.addEventListener('keypress',
      (e) => {

        // selects an audio element depending on triggered drumButton
        const audioElement = document.getElementById(e.key.toUpperCase());

        // sets the volume and played the audio
        !powerState
          ? audioElement.volume = 0
          : audioElement.volume = audioVolume;
        audioElement.play();

        // sets message for the display component
        !powerState
          ? setMessage('')
          : setMessage(audioElement.parentElement.id);

        // sets visual effect for the triggered drumButton
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
      : setMessage(e.target.id);
  }

  // creats the drumButtons 
  const buttons = sounds.map((sound) => {
    return (
      <DrumButton
        key={sound.key}
        letter={sound.key}
        name={sound.name}
        link={sound.link}
        handleClick={playAudio}
        powerState={powerState}
        setMessage={setMessage}
        audioVolume={audioVolume}
      />
    );
  });

  return (
    <>
      {buttons}
    </>
  );
}