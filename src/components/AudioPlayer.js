// src/components/AudioPlayer.js
import React from 'react';

function AudioPlayer({ audioSrc, description }) {
  return (
    <div className="audio-container">
      <audio controls>
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <p>{description}</p>
    </div>
  );
}

export default AudioPlayer;
