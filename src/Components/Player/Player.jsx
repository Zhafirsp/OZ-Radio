import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import styles from "./Player.module.css";
import { PiPlayCircleThin , PiPauseCircleThin  } from "react-icons/pi";
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';
import axios from "axios";

const VISIT_STATION = "Visit this station at ";
const ICECAST_METADATA_JS_DEMO = "Icecast Metadata JS Demo";

const CodecInfo = React.memo(({ codecInfo }) => {
  const canvas = useRef();

  useEffect(() => {
    if (canvas.current) {
      const context = canvas.current.getContext("2d");
      context.clearRect(0, 0, canvas.current.width, canvas.current.height);

      if (codecInfo) {
        context.font = `${
          Math.min(canvas.current.width, canvas.current.height) / 25
        }px monospace`;
        context.fillText(
          `${codecInfo.bitrate} kb/s ${codecInfo.sampleRate} Hz`,
          canvas.current.width,
          canvas.current.height,
        );
      }
    }
  }, [codecInfo?.bitrate, codecInfo?.sampleRate]);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (canvas.current) {
        window.requestAnimationFrame(() => {
          canvas.current.height = window.innerHeight * 2;
          canvas.current.width = window.innerWidth * 2;
        });
      }
    });

    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);

  const title =
    codecInfo &&
    Object.entries(codecInfo).reduce(
      (acc, [k, v]) => acc + `${k}: ${v}\x0A`,
      "",
    );

  return <canvas ref={canvas} title={title} className={styles.codecInfo} />;
});

const PlayerButton = React.memo(({ station, toggle, playing, volume, setVolume, muteVolume, setMuteVolume }) => (
  <div className="play-control">
    <a 
      disabled={!station}
      className="play-button text-warning" 
      id="RadioPlayer" 
      onClick={toggle} 
      allow="autoplay"
    >
      {playing 
      ? 
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="auto" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
      </svg> 
      : 
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="auto" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
      </svg>}
    </a>
  </div>
));

const Player = ({ station, playing, toggle, codecInfo }) => {
  
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muteVolume ? 0 : volume / 100;
    }
  }, [volume, muteVolume]);

  
  const handleToggleMute = () => {
    setMuteVolume((prevMuteVolume) => !prevMuteVolume);
  };
  


  const title = metadata?.StreamTitle || metadata?.TITLE;
  document.title = title ? `${title} | ${ICECAST_METADATA_JS_DEMO}` : ICECAST_METADATA_JS_DEMO;

  return (
    <>
    <audio ref={audioRef}/>
      <div className={styles.player}>
        <PlayerButton 
        station={station} 
        playing={playing} 
        toggle={toggle} 
        />
      </div>
    </>
  );
};

export default Player;