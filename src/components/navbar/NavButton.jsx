import React from 'react';

const NavButton = ({ label, onMouseEnter }) => {
	return (
		<button onMouseEnter={onMouseEnter} className='navbar-button'>
			{label}
		</button>
	);
};

export default NavButton;