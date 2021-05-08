import React from 'react';
import Typed from 'react-typed';

const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="main-info">
				<h1>Welcome to Codewith-TedB with Shyamala</h1>
				<Typed
					className="typed-text"
					strings={['Java Development', 'Spring Development', 'DevOps/Cloud']}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>
				<a href="#" className="btn-main-offer">
					Contact Me
				</a>
			</div>
		</div>
	);
};
export default Header;
