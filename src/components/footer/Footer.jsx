import React from 'react';
import './Footer.css';

import youtubeIcon from '../../assets/youtube-icon.jpg'
import linkedinIcon from '../../assets/linkedin-icon.png';
import discordIcon from '../../assets/discord-icon.png';
import githubIcon from '../../assets/github-icon.png';
import twitterIcon from '../../assets/twitter-icon.webp';

const Footer = () => {
  return (

	<>
		<div className='footer'>
		<div className='footer-links'>
			<div className='footer-link' id='voiceflow-banner'>
			Voiceflow
			</div>
			<div className='footer-link'>
			<img src={youtubeIcon} alt='YouTube' />
			<span>YouTube</span>
			</div>
			<div className='footer-link'>
			<img src={linkedinIcon} alt='LinkedIn' />
			<span>LinkedIn</span>
			</div>
			<div className='footer-link'>
			<img src={discordIcon} alt='Discord' />
			<span>Discord</span>
			</div>
			<div className='footer-link'>
			<img src={githubIcon} alt='GitHub' />
			<span>GitHub</span>
			</div>
			<div className='footer-link'>
			<img src={twitterIcon} alt='Twitter' />
			<span>Twitter</span>
			</div>
		</div>

		<div className='footer-links'>
			<div className='footer-link footer-link-header'>
			Product
			</div>
			<div className='footer-link'>
			<img src={youtubeIcon} alt='YouTube' />
			<span>YouTube</span>
			</div>
			<div className='footer-link'>
			<img src={linkedinIcon} alt='LinkedIn' />
			<span>LinkedIn</span>
			</div>
			<div className='footer-link'>
			<img src={discordIcon} alt='Discord' />
			<span>Discord</span>
			</div>
			<div className='footer-link'>
			<img src={githubIcon} alt='GitHub' />
			<span>GitHub</span>
			</div>
			<div className='footer-link'>
			<img src={twitterIcon} alt='Twitter' />
			<span>Twitter</span>
			</div>
		</div>

		<div className='footer-links'>
			<div className='footer-link footer-link-header'>
			Resources
			</div>
			<div className='footer-link'>
			<img src={youtubeIcon} alt='YouTube' />
			<span>YouTube</span>
			</div>
			<div className='footer-link'>
			<img src={linkedinIcon} alt='LinkedIn' />
			<span>LinkedIn</span>
			</div>
			<div className='footer-link'>
			<img src={discordIcon} alt='Discord' />
			<span>Discord</span>
			</div>
			<div className='footer-link'>
			<img src={githubIcon} alt='GitHub' />
			<span>GitHub</span>
			</div>
			<div className='footer-link'>
			<img src={twitterIcon} alt='Twitter' />
			<span>Twitter</span>
			</div>
		</div>

		<div className='footer-links'>
			<div className='footer-link footer-link-header'>
			Enterprise
			</div>
			<div className='footer-link'>
			<img src={youtubeIcon} alt='YouTube' />
			<span>YouTube</span>
			</div>
			<div className='footer-link'>
			<img src={linkedinIcon} alt='LinkedIn' />
			<span>LinkedIn</span>
			</div>
			<div className='footer-link'>
			<img src={discordIcon} alt='Discord' />
			<span>Discord</span>
			</div>
			<div className='footer-link'>
			<img src={githubIcon} alt='GitHub' />
			<span>GitHub</span>
			</div>
			<div className='footer-link'>
			<img src={twitterIcon} alt='Twitter' />
			<span>Twitter</span>
			</div>
		</div>

		<div className='footer-links'>
			<div className='footer-link footer-link-header'>
			Company
			</div>
			<div className='footer-link'>
			<img src={youtubeIcon} alt='YouTube' />
			<span>YouTube</span>
			</div>
			<div className='footer-link'>
			<img src={linkedinIcon} alt='LinkedIn' />
			<span>LinkedIn</span>
			</div>
			<div className='footer-link'>
			<img src={discordIcon} alt='Discord' />
			<span>Discord</span>
			</div>
			<div className='footer-link'>
			<img src={githubIcon} alt='GitHub' />
			<span>GitHub</span>
			</div>
			<div className='footer-link'>
			<img src={twitterIcon} alt='Twitter' />
			<span>Twitter</span>
			</div>
		</div>
		
		</div>
		<div className='footer-copyright'>
			<p>&copy; 2022 Voiceflow. All rights reserved.</p>
		</div>
	</>
  );
};

export default Footer;
