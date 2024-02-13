import React, { useState, useRef } from 'react';
import { PiPlayCircleThin , PiPauseCircleThin  } from "react-icons/pi";

const PlayButton  = ({ onPlayPause, isPlaying }) => {

  return (
    <div>
      <a 
        className="play-button" 
        id="RadioPlayer" 
        onClick={onPlayPause}>
          {isPlaying ? <PiPauseCircleThin/> : <PiPlayCircleThin/>}
      </a>
    </div>
  );
};


export default PlayButton ;
