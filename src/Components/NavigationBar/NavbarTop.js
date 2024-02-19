import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import PlayButton from '../PlayButton';
import { ToastContainer, toast } from "react-toastify";
import oz_bdg from '../../Assets/Img/logo_oz_bdg.png'
import oz_jkt from '../../Assets/Img/logo_oz_jkt.png'
import oz_bali from '../../Assets/Img/logo_oz_bali.png'
import '../../Assets/Css/nav_top.css'
import * as xml_js from 'xml-js';

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

  const [streamData, setStreamData] = useState({
    Bandung: { streamName: '', currentlyPlaying: '' },
    Jakarta: { streamName: '', currentlyPlaying: '' },
    Bali: { streamName: '', currentlyPlaying: '' }
  });

  const handlePlayPause = (stationName) => {
    const audio = audioRef.current;
    const isPlaying = playStates[stationName];

    if (isPlaying) {
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
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://streaming.ozradiojakarta.com:8443/status.xsl');
        const xmlData = await response.text();
    
        // Parse XML to JavaScript object using xml-js
        const parsedData = xml_js.parse(xmlData, { compact: true });
    
        const parsedStreamData = {};
        const sourceElements = parsedData.icestats.source;
    
        sourceElements.forEach(sourceElement => {
          const streamName = sourceElement.Stream_Name._text;
          const currentlyPlaying = sourceElement.title._text;
    
          const mountPoint = sourceElement.mount._text.split('/')[1];
    
          parsedStreamData[mountPoint] = {
            streamName: streamName,
            currentlyPlaying: currentlyPlaying
          };
        });
    
        setStreamData(parsedStreamData);
      } catch (error) {
        console.error('Error fetching ', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
        <Container fluid>
            <div className="navbar-top custom-nav col-md-8 offset-md-2" variant="underline" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {radioStations.map((station, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={station.image} alt="" className="px-1 img-radio" style={{ width:'150px' , marginRight:'-150px' }} />
                  {/* <div className='fs-5 fw-medium'>{station.name}</div> */}
                  <PlayButton
                    className="button-navtop"
                    onPlayPause={() => handlePlayPause(station.name)}
                    isPlaying={playStates[station.name]}
                  />
                   <div>
                    {/* <p>Stream Name: {streamData[station.name]?.streamName}</p>
                    <p>Currently Playing: {streamData[station.name]?.currentlyPlaying}</p> */}
                  </div>
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
