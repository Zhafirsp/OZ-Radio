import React, { useState, useRef } from 'react';
import { FiPlay, FiPause } from "react-icons/fi";

const PlayButton  = ({ onPlayPause, isPlaying }) => {

  return (
    <div>
      <button 
        className="secondary-button" 
        id="RadioPlayer" 
        style={{ marginLeft:"-10px", }} 
        onClick={onPlayPause}>
          {isPlaying ? <FiPause/> : <FiPlay/>}
      </button>
    </div>
  );
};


export default PlayButton ;
