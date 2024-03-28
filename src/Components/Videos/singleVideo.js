import React, { useState } from "react";
import heroImg from '../../Assets/Img/concert.jpg'
import heroImg1 from '../../Assets/Img/concert1.jpg'
import heroImg2 from '../../Assets/Img/concert2.jpg'
import heroImg3 from '../../Assets/Img/concert3.jpg'
import { Parallax, Background } from "react-parallax";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { BsPlayCircleFill  } from "react-icons/bs";


const VideoThumbnail = styled.div`
  position: relative;
  // width: 590px;
  // height: 333px;
  overflow: hidden;
  cursor: pointer;
`;

const PlayButton = styled.p`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  // z-index: 1;
  opacity:0.77;
`;

const ThumbnailImage = styled.img`
  width: 550px;
  height: 333px;
`;


const SingleVideo = ({videoId, thumbnailUrl}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };
  return (
    <>
      <section className='videos mt-4 mx-auto' >
      {isPlaying ? (
        <iframe
          width="590"
          height="333"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="OzClusive"
          allowFullScreen
        ></iframe>
      ) : (
      <VideoThumbnail onClick={handleClick}>
        <ThumbnailImage src={thumbnailUrl} alt="Video Thumbnail" className="thumbnail-image"/>
        <PlayButton variant="outline-light" size="lg"><BsPlayCircleFill /></PlayButton>
      </VideoThumbnail>
      )}
      <p className="primary-text mx-auto">Episode 6: Lorem Lorem Lorem Lorem Lorem</p>
      </section>
    </>
  )
}

export default SingleVideo