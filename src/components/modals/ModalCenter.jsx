import React, { useState, useRef, useEffect } from 'react';
import './ModalCenter.css';

const ModalCenter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className='center-toggle-text' onClick={toggleModal}>
        Why Voiceflow ?
      </div>
      {modalOpen && (
        <div className='modal-overlay'>
          <div ref={modalRef} className='modal'>
            <div className='modal-content'>
              <h2>This is a Modal</h2>
            </div>
          </div>
        </div>
      )}
      <div className='text'>
        Trusted by <b> 150,000+ </b> people and teams building agents across
        every channel and use case
      </div>
    </div>
  );
};

export default ModalCenter;
