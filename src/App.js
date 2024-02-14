import React from 'react';
import HeroSection from './components/hersosection/HeroSection';
import ModalCenter from './components/modals/ModalCenter';
import VideoComponent from './components/hersosection/VideoComponent';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import BgSection from './components/hersosection/BgSection';
import UpperNavbar from './components/navbar/UpperNavbar';


function App() {
	return (
		<div className='app'>	
			<UpperNavbar />
			<NavBar />
			<HeroSection />
			<VideoComponent />
			<ModalCenter />
			<BgSection />
			<Footer />
		</div>
	);
}

export default App;
