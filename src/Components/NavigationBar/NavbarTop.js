// NavTop.jsx
import React, { useState, useRef } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import PlayButton from '../PlayButton';
import { ToastContainer, toast } from "react-toastify";
import oz_bdg from '../../Assets/Img/logo_oz_bdg.png'
import oz_jkt from '../../Assets/Img/logo_oz_jkt.png'
import oz_bali from '../../Assets/Img/logo_oz_bali.png'

const NavTop = () => {
  const audioRef = useRef(null);
  const [playStates, setPlayStates] = useState({
    Bandung: false,
    Jakarta: false,
    Bali: false
  });

  const radioStations = [
    { name: 'Bandung', image: oz_bdg, frequency: '103.1 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozradiobandung' },
    { name: 'Jakarta', image: oz_jkt, frequency: '90.8 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozjakarta' },
    { name: 'Bali', image: oz_bali, frequency: '101.2 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozradiobali' }
  ];

  const handlePlayPause = (stationName) => {
    const audio = audioRef.current;
    const isPlaying = playStates[stationName];

    if (isPlaying) {
      // if (audio && !audio.paused) {
        try {
          audio.pause(); 
          setPlayStates(prevState => ({
            ...prevState,
            [stationName]: false
          }));
        } catch (error) {
          toast.error("Failed to pause audio playback.", {
            type: "error",
            theme:"dark",
            pauseOnFocusLoss: false
          });
        // }
      }
    } else {
      // Stop playing all stations
      Object.keys(playStates).forEach((key) => {
        if (playStates[key]) {
          try {
            audio.pause();
            setPlayStates(prevState => ({
              ...prevState,
              [key]: false
            }));
          } catch (error) {
            toast.error("Failed to pause audio playback.", {
              type: "error",
              theme:"dark",
              pauseOnFocusLoss: false
            });
          }
        }
      });

      // Start playing the selected station
      const selectedStation = radioStations.find(station => station.name === stationName);
      if (selectedStation) {
        try {
          audio.src = selectedStation.url;
          audio.play();
          setPlayStates(prevState => ({
            ...prevState,
            [stationName]: true
          }));
        } catch (error) {
          toast.error("Failed to start audio playback.", {
            position: toast.POSITION.TOP_CENTER
          });
        }
      }
    }
  };

  return (
    <>
        <Container fluid>
            <div className="navbar-top custom-nav col-md-8 offset-md-2" variant="underline" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {radioStations.map((station, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={station.image} alt="" className="px-1" style={{ width:'150px' , marginRight:'-150px' }} />
                  {/* <div className='fs-5 fw-medium'>{station.name}</div> */}
                  <PlayButton
                    className="button-navtop"
                    onPlayPause={() => handlePlayPause(station.name)}
                    isPlaying={playStates[station.name]}
                  />
                </div>
              ))}
            </div>
        </Container>
      <br />
      <audio ref={audioRef} />
      <ToastContainer/>
    </>
  );
};

export default NavTop;
