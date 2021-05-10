import React from 'react';
import Particles from 'react-particles-js';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Services from './Services';
import Testimonials from './Testimonials';
import TopNav from './TopNav';

const Home = () => {
	return (
		<React.Fragment>
			<TopNav />
			<Particles
				className="particles-canvas"
				params={{
					particles: {
						number: {
							value: 30,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: 'star',
							stroke: {
								width: 2,
								color: '#f9ab00',
							},
						},
					},
				}}
			/>
			<Header />
			<AboutMe />
			<Services />
			<Experience />
			<Testimonials />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
