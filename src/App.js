import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/Navbar';
import Header from './components/Header';
import React from 'react';
import Particles from 'react-particles-js';

function App() {
	return (
		<React.Fragment>
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
			<Navbar />
			<Header />
		</React.Fragment>
	);
}

export default App;
