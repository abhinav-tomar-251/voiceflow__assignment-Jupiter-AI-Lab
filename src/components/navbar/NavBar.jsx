import React, { useState, useRef, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {

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
		<nav className='navbar'>
			<div className='navbar-brand'>
				<div className='voiceflow-logo'>Voiceflow</div>
			</div>
			<div className='navbar-menu'>
				<div className='navbar-start'>
					<a href='#' className='navbar-start-item'>
						Product
					</a>
					<a href='#' className='navbar-start-item'>
						Community
					</a>
					<a href='#' className='navbar-start-item'>
						Docs
					</a>
					<a href='#' className='navbar-start-item'>
						Templates
					</a>
					<a href='#' className='navbar-start-item'>
						Enterprise
					</a>
					<a href='#' className='navbar-start-item'>
						Pricing
					</a>
				</div>
			</div>
			<div className='navbar-end'>
				<div className='navbar-item'>
					<div className='buttons'>
						<a href='#' className='button is-primary' onClick={toggleModal}>
							Login
						</a>
						<a href='#' className='button is-green'>
							Get started
						</a>
					</div>
				</div>
			</div>

			{/* Modal */}
			
			{modalOpen && (
				<div className='modal-overlay'>
					<div ref={modalRef} className='modal'>
						<div className='modal-content'>
							<h2>This is a Login Modal</h2>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
