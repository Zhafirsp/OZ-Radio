import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import oz_bdg from '../../Assets/Img/logo_oz_bdg.png'
import oz_jkt from '../../Assets/Img/logo_oz_jkt.png'
import oz_bali from '../../Assets/Img/logo_oz_bali.png'
import oz_logo from '../../Assets/Img/Logo.png'
import song from '../../Assets/Img/concert4.jpg'
import '../../Assets/Css/nav_top.css'
import PlayButton from '../../Pages/radioPage/PlayButton'
import Player from "../Player/Player";
import StationSelector from "../StationSelector/StationSelector";
import stations from "../../Data/stations.json";
import IcecastMetadataPlayer from "icecast-metadata-player";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import '../../Assets/Css/nav_bottom.css'
import { IoSearchCircle, IoCloseCircle  } from "react-icons/io5";

const VISIT_STATION = "Visit radio ";
const ICECAST_METADATA_JS_DEMO = "Icecast Metadata JS Demo";
const SELECT_STATION = "Select a station";
const SELECT_OR_PLAY = "Press play";
const LOADING = "Loading...";
const RECONNECTING = "Lost Connection. Reconnecting...";
const CONNECTED = "Waiting metadata...";
const SWITCHING = "Switching...";

const radioStations = [
  { 
    name: 'OZ RADIO Bali', 
    image: oz_bali, 
    frequency: '101.2 FM', 
    link: "https://streaming.ozradiojakarta.com:8443/",
    endpoints: [
      {
        "endpoint": "https://streaming.ozradiojakarta.com:8443/ozradiobali",
        "codec": "AAC",
        "metadataTypes": ["icestats"],
        "statsSources": ["icy", "icestats"]
      }
    ]
  },
  { 
    name: 'OZ RADIO Jakarta', 
    image: oz_jkt, 
    frequency: '90.8 FM', 
    link: "https://streaming.ozradiojakarta.com:8443/",
    endpoints: [
      {
        "endpoint": "https://streaming.ozradiojakarta.com:8443/ozjakarta",
        "codec": "AAC",
        "metadataTypes": ["icestats"],
        "statsSources": ["icy", "icestats"]
      }
    ]
  },
  { 
    name: 'OZ RADIO Bandung', 
    image: oz_bdg, 
    frequency: '103.1 FM', 
    link: "https://streaming.ozradiojakarta.com:8443/",
    endpoints: [
      {
        "endpoint": "https://streaming.ozradiojakarta.com:8443/ozjakarta",
        "codec": "AAC",
        "metadataTypes": ["icestats"],
        "statsSources": ["icy", "icestats"]
      }
    ]
  },
  ];

const NavTop = () => {
  const audioRef = useRef(null);
  const [audioElement] = useState(new Audio());
  const [station, setStation] = useState();
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(60);

  const [metadata, setMetadata] = useState(SELECT_STATION);
  const [icecast, setIcecast] = useState();

  const [castSession, setCastSession] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

/*=============== SEARCH BAR JS ===============*/
const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const namespace = "urn:x-cast:icecast-metadata-js-demo";
  const castAPIId = "E3C20492";

  const sendCastMessage = useCallback(
    (msg) => {
      castSession?.sendMessage(namespace, msg);
    },
    [castSession],
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js";
    document.body.appendChild(script);

    window.__onGCastApiAvailable = (loaded) => {
      if (loaded) {
        const sessionRequest = new window.chrome.cast.SessionRequest(castAPIId);

        const apiConfig = new window.chrome.cast.ApiConfig(
          sessionRequest,
          (session) => {
            setCastSession(session);
          },
          () => {},
        );

        window.chrome.cast.initialize(apiConfig);
      }
    };
  }, []);
  
  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);
  };


  const changeStation = useCallback(
    async (newStation) => {
      if (
        icecast &&
        station &&
        icecast.state !== "stopped" &&
        newStation.name === station.name &&
        newStation.switchable !== false &&
        station.switchable !== false
      ) {
        icecast.switchEndpoint(newStation.endpoint, newStation);
      } else {
        if (icecast) {
          await icecast.stop();
          sendCastMessage({ command: "stop" });
          icecast.detachAudioElement();
        }

        sendCastMessage({
          command: "change station",
          enableCodecUpdate: true,
          ...newStation,
        });

        let currentMetadata = "";

        const player = new IcecastMetadataPlayer(newStation.endpoint, {
          onMetadata: (meta) => {
            console.log(meta);
            currentMetadata = meta;
            setMetadata(meta);
          },
          onPlay: () => {
            setPlaying(true);
          },
          onStop: () => {
            setPlaying(false);
            currentMetadata = "";
            setMetadata(SELECT_OR_PLAY);
          },
          onLoad: () => {
            setPlaying(true);
            setMetadata(LOADING);
          },
          onError: (error) => {
            currentMetadata = "";
            setMetadata(error?.message || error);
          },
          onRetry: () => {
            currentMetadata = "";
            setMetadata(RECONNECTING);
          },
          onStreamStart: () => {
            setMetadata(
              newStation.metadataTypes.length
                ? currentMetadata || CONNECTED
                : "",
            );
          },
          onSwitch: () => {
            setMetadata(SWITCHING);
          },
          icyDetectionTimeout: 5000,
          icyCharacterEncoding: newStation.icyCharacterEncoding,
          enableLogging: true,
          metadataTypes: newStation.metadataTypes,
          bufferLength: newStation.bufferLength,
          audioElement,
          retryTimeout: 120,
          endpointOrder: "random",
        });

        player.play();
        sendCastMessage({ command: "play" });

        setIcecast(player);
      }

      setStation(newStation);
    },
    [icecast, station, audioElement, sendCastMessage],
  );

  const play = useCallback(() => {
    icecast.play();
    sendCastMessage({ command: "play" });
  }, [icecast, sendCastMessage]);

  const stop = useCallback(() => {
    icecast.stop();
    sendCastMessage({ command: "stop" });
  }, [icecast, sendCastMessage]);

  const toggle = useCallback(() => {
    playing ? stop() : play();
  }, [playing, stop, play]);

  
  const [playStates, setPlayStates] = useState({
    Bandung: false,
    Jakarta: false,
    Bali: false
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
      const endpoint = selectedStation.endpoints[0]; // Ambil endpoint pertama
      const streamUrl = endpoint.endpoint; // Dapatkan URL streaming dari endpoint
        try {
          audio.src = streamUrl;
          audio.play();
          setPlayStates(prevState => ({
            ...prevState,
            [stationName]: true
          }));
        } catch (error) {
          toast.error("Failed to start audio playback.");
        }
      }
    }
  };

  const Metadata = React.memo(({ metadata }) => (
    <div>
      {typeof metadata === "object"
        ? metadata.StreamTitle ||
          (metadata.ARTIST
            ? `${metadata.ARTIST} - ${metadata.TITLE}`
            : metadata.TITLE) ||
          metadata.VENDOR_STRING
        : metadata}
    </div>
  ));

  const VisitStationLink = React.memo(
    ({ station }) =>
      station?.link && (
        <div>
          {VISIT_STATION}
          <a
            href={station.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {station.name}
          </a>
        </div>
      ),
  );


  const title = metadata?.StreamTitle || metadata?.TITLE;
  document.title = title
    ? `${title} | ${ICECAST_METADATA_JS_DEMO}`
    : ICECAST_METADATA_JS_DEMO;

  return (
    <>
    <div className='navbar'>
        {/* <div className="blur-navtop" style={{ backgroundImage: `url(${song})` }} /> */}
        <Container fluid>
     <div 
     className='topnav'
     expand="lg"
     fixed="top"
    >
          <div className="navbar-top navbar-song custom-nav pt-3 blur-navtop" variant="underline" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${song})` }}>
              <div className='col-md-4 offset-md-1'>
              <Link to="/">
                <img className='nav-logo navbar-brand pb-5' src={oz_logo} width={150}/>
                </Link>
                </div>
            <Player
                  allow="autoplay"
                  toggle={toggle}
                  playing={playing}
                  volume={volume}
                  setVolume={setVolume}
                />
              <img src={song} alt="" className="ms-3 mb-5 img-radio img-fluid " style={{ width:'115px', height:'75px' }} />
                <div className='song-text mb-4'>
                      <Metadata 
                      metadata={metadata} 
                      className="metadata-text"
                      />
                      <VisitStationLink station={station} />
                  </div>
                  <form action="https://www.google.com/search" target='_blank' className={`search ${showSearch ? 'show-search' : ''}`} id="search-bar">
                      <input type="search" placeholder="Type something..." name="q" className="search__input"/>
                      <div className="search__button" id="search-button" onClick={toggleSearch}>
                          <IoSearchCircle className='search__icon ms-3 mb-3' style={{ cursor:"pointer", fontSize:"50px" }} />
                          <IoCloseCircle className='search__close mb-3' style={{ cursor:"pointer", fontSize:"50px" }} />
                      </div>
                  </form>
          </div>
        <br />
        <audio ref={audioRef} volume={volume / 100} />
        <ToastContainer/>
      </div>
        </Container>
      <Navbar
    expand="lg"
    fixed="top"
    // bg={isScrolled ? 'white' : 'white'}
    className='navbar-bottom'
    id='navbar-bottom'
    style={{
      backdropFilter: isScrolled ? 'blur(40px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(40px)' : 'none',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${song})`
      // borderTop: isScrolled ? '1px solid #ccc' : 'none',
    }}
  >
    <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav navbarScroll " className='' />
                    <Navbar.Collapse id="basic-navbar-nav navbarScroll ">
                        <Nav className=" custom-nav fs-5 fw-medium col-md-6 offset-md-2" variant="underline">
                        <Nav.Link onClick={handleShow} className='offcanvas-menu'><GiHamburgerMenu className='pb-1' />Menu</Nav.Link>
                        <Offcanvas show={show} onHide={handleClose}>
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Close</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            <div className='fs-5'>
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/news">News</Link></Nav.Link>
                            <Nav.Link><Link to="/radio">Radio</Link></Nav.Link>
                            <Nav.Link><Link to="/youtube">TV</Link></Nav.Link>
                            <Nav.Link><Link to="/event">Events</Link></Nav.Link>
                            <Nav.Link><Link to="/playlist">Playlist</Link></Nav.Link>
                            <hr/>
                            <Nav.Link><Link to="#">Sustainability</Link></Nav.Link>
                            <Nav.Link><Link to="/contact">Advertising</Link></Nav.Link>
                            <Nav.Link><Link to="#">Community</Link></Nav.Link>
                            <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About</Link></Nav.Link>
                            </div>
                          </Offcanvas.Body>
                        </Offcanvas>
                            {/* <NavDropdown title="City" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="https://bandung.ozradio.id/" target='_blank'>Bandung (103.1 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="https://ozradiojakarta.com/" target='_blank'>Jakarta (90.8 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="https://ozradiobali.id/" target='_blank'>Bali (101.2 FM)</NavDropdown.Item>
                                <NavDropdown.Item href="#">Aceh (102.8 FM) </NavDropdown.Item>
                            </NavDropdown> */}
                                </Nav>
                          </Navbar.Collapse>
                        <div className="station-selector fs-5 fw-medium mt-3 d-flex col-md-4">
                          <p style={{ color:"#F49C27" }}>Live Streaming :</p>
                          <StationSelector 
                            allow="autoplay"
                              stations={stations}
                              changeStation={changeStation}
                              selectedStation={station}
                            />
                        </div>
                </Container>
            </Navbar>
            </div>
    </>
  );
};

export default NavTop;
