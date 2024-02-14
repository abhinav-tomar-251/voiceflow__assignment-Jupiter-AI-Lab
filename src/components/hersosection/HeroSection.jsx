import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
	return (
		<>
			<div>
				<div id='center-div-main'>
					<div className='header'>
						The AI chatbot platform <br /> that meets your ambition
					</div>
					<div className='text'>
						Voiceflow helps conversational AI teams build and launch <br />{' '}
						incredible AI agents, for any use case, faster.
					</div>
					<div className='button-container'>
						<button className='button'>
							Start building <span id='span-button-center'>-it's free</span>
						</button>
						<button className='button' id='contact-sales-button-center'>
							Contact sales
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
