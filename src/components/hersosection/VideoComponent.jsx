import React from 'react';
import './VideoComponent.css';
import VideoCenter from '../../assets/VideoCenter.webm';

const VideoComponent = () => {
  return (
    <div id='center-div-main' className='video-container'>
      <video width='640' height='360' controls autoPlay muted>
        <source src={VideoCenter} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoComponent;
