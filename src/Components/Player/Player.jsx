import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import styles from "./Player.module.css";
import { PiPlayCircleThin , PiPauseCircleThin  } from "react-icons/pi";
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';

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

const Metadata = React.memo(({ metadata }) => (
  <div className={styles.metadata}>
    {typeof metadata === "object"
      ? metadata.StreamTitle ||
        (metadata.ARTIST
          ? `${metadata.ARTIST} - ${metadata.TITLE}`
          : metadata.TITLE) ||
        metadata.VENDOR_STRING
      : metadata}
  </div>
));

const PlayerButton = React.memo(({ station, toggle, playing, volume, setVolume, muteVolume, setMuteVolume }) => (
  <div className="d-flex play-control">
    <a 
      disabled={!station}
      className="play-button mb-4 " 
      id="RadioPlayer" 
      onClick={toggle} 
      allow="autoplay"
    >
      {playing ? <PiPauseCircleThin /> : <PiPlayCircleThin />}
    </a>
    {/* <div className="ms-3">
      <a onClick={() => setMuteVolume(!muteVolume)}>
        {muteVolume || volume < 5 ? (
          <IoMdVolumeOff fontSize={35}/>
        ) : volume < 40 ? (
          <IoMdVolumeLow fontSize={35}/>
        ) : (
          <IoMdVolumeHigh fontSize={35}/>
        )}
      </a>
      <input
        className={styles.sliderVolume}
        type="range"
        min={0}
        max={100}
        value={muteVolume ? 0 : volume} // Gunakan 0 jika dimute, jika tidak gunakan nilai volume
        onChange={(e) => setVolume(parseInt(e.target.value))}
        disabled={muteVolume} // Nonaktifkan kontrol volume jika dimute
      />
    </div> */}
  </div>
));


const VisitStationLink = React.memo(
  ({ station }) =>
    station?.link && (
      <div className={styles.visitStation}>
        {VISIT_STATION}
        <a
          className={styles.link}
          href={station.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {station.name}
        </a>
      </div>
    ),
);


const Player = ({ station, playing, toggle, metadata, codecInfo }) => {
  
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muteVolume ? 0 : volume / 100;
    }
  }, [volume, muteVolume]);

  const handleToggleMute = () => {
    setMuteVolume((prevMuteVolume) => !prevMuteVolume);
  };
  

  // update metadata in title
  const title = metadata?.StreamTitle || metadata?.TITLE;
  document.title = title
    ? `${title} | ${ICECAST_METADATA_JS_DEMO}`
    : ICECAST_METADATA_JS_DEMO;

  return (
    <>
    <audio ref={audioRef}/>
      <div className={styles.player}>
        <PlayerButton 
        station={station} 
        playing={playing} 
        toggle={toggle} 
        volume={volume}
        setVolume={setVolume}
        muteVolume={muteVolume}
        setMuteVolume={setMuteVolume}
        />
        {/* <div className={styles.playerText}>
          <Metadata metadata={metadata} />
          <div className={styles.stationInfoContainer}>
            <VisitStationLink station={station} />
          </div>
        </div> */}
      </div>
      {/* <CodecInfo codecInfo={codecInfo} /> */}
    </>
  );
};

export default Player;