import React from 'react';
import './BgSection.css';
import mainimg from '../../assets/HeroImage.png';
import ilariaImg from '../../assets/ilaria-img.jpg'; 

const BgSection = () => {
  return (
    <div className='bgsection-main-container-div'>
      <div className='Screenshot1'>
        <img src={mainimg} alt='Hero' />
      </div>
      <div className='build-page'>
        <h1 className='text-1'>BUILD</h1>
        <h2>
          Build chatbots <br /> that scale, easily
        </h2>
        <p>
          Voiceflow is the world's most advanced agent design platform, allowing
          teams of any size to build agents of any scale and complexity with ease.
        </p>
        <a
          href='/agent-build-tool'
          className='bgsection-button'
        >
          Agent build tool <span>→</span>
        </a>
        <h3 style={{ color: 'red' }}>Vodafone</h3>
        <p style={{ fontSize: '15px' }}>
          “Voiceflow has made creating conversation dialogue journeys easy and
          smooth. It has facilitated collaboration and best practice sharing
          between people across different teams and countries.”
        </p>
        <div className='image-container'>
          <img src={ilariaImg} width={60} height={60} alt='author' /> {/* Use the imported image */}
          <div className='author'>
            Illaria Di Donfrancesco <br />
            Product Owner - AI Platforms
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgSection;
