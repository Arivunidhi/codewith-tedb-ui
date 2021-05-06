import React from 'react';
import Typed from 'react-typed';

const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="main-info">
				<h1>Welcome to Codewith-TedB</h1>
				<Typed
					className="typed-text"
					strings={[
						'React Web Application Development',
						'Java Enterprise Application',
						'Cloud Platform',
					]}
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
