import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import PlayButton from '../PlayButton';
import { ToastContainer, toast } from "react-toastify";
import oz_bdg from '../../Assets/Img/logo_oz_bdg.png'
import oz_jkt from '../../Assets/Img/logo_oz_jkt.png'
import oz_bali from '../../Assets/Img/logo_oz_bali.png'
import song from '../../Assets/Img/song.jpg'
import '../../Assets/Css/nav_top.css'
import * as xml_js from 'xml-js';
import { IcecastMetadataReader } from 'icecast-metadata-js';

const NavTop = () => {
  const audioRef = useRef(null);
  const [playStates, setPlayStates] = useState({
    Bandung: false,
    Jakarta: false,
    Bali: false
  });

  const radioStations = [
    { name: 'Bali', image: oz_bali, frequency: '101.2 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozradiobali' },
    { name: 'Jakarta', image: oz_jkt, frequency: '90.8 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozjakarta' },
    { name: 'Bandung', image: oz_bdg, frequency: '103.1 FM', url: 'https://streaming.ozradiojakarta.com:8443/ozradiobandung' },
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
        // Buat instance IcecastMetadataReader dengan URL server Icecast
        const icecastReader  = new IcecastMetadataReader('https://streaming.ozradiojakarta.com:8443');

        // Ambil metadata dari server Icecast
        const metadata = await IcecastMetadataReader.getMetadata();

        console.log(metadata); // Cetak metadata ke konsol

        // Dapatkan informasi yang Anda perlukan dari metadata
        const streamName = metadata.Stream_Name;
        const currentlyPlaying = metadata.Stream_Title;

        // Simpan data dalam state komponen
        setStreamData({ streamName, currentlyPlaying });
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    <div className='topnav'>
        <div className="blur-navtop" style={{ backgroundImage: `url(${song})` }} />
        <Container fluid>
          <div className="navbar-top custom-nav col-md-8 offset-md-2" variant="underline" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
            {radioStations.map((station, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <img src={station.image} alt="" className="px-1 img-radio" style={{ width:'150px' , marginRight:'-150px' }} />
                <PlayButton
                  className="btn button-navtop"
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
          <div className="navbar-song custom-nav col-md-8 offset-md-2" variant="underline" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'-20px' }}>
          <img src={song} alt="" className="px-1 img-radio" style={{ width:'150px', height:'100px' }} />
                <div className='song-text ms-3'>
                <p className='fw-bold mt-2'>NOW PLAYING</p>
                <p style={{ marginTop:'-10px' }}>Midnight in a Perfect World</p>
                <p className='fw-bolder' style={{ marginTop:'-10px' }}>ML Buch -Kali Uchis</p>
                </div>
          </div>
        </Container>
        <br />
        <audio ref={audioRef} />
        <ToastContainer/>
      </div>
    </>
  );
};

export default NavTop;
