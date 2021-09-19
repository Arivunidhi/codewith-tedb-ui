import React from 'react';
import Typed from 'react-typed';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<div id="header" className="header-wrapper">
			<div className="main-info">
				<h2>Hello, I'm <span id="name">Arivunidhi.</span></h2>
				<h2>I'm a full-stack java developer.</h2>
				<Typed
					className="typed-text"
					strings={[
						'HTML5,CSS3,JavaScript(ES6),React,BootStrap',
						'Java,J2EE,Spring,Hibernate,Webservices,Microservices',
						'Kubernetes,Docker,Git,Kafka,Maven,AWS,nginx,JBoss,Heroku',
						'SQL,MongoDB,Python,Datastructures,Algorithm',
					]}
					typeSpeed={40}
					backSpeed={60}
					loop
				/>
				{/* <Link to="https://codewith-tedb.blogspot.com/" className="btn-main-offer">
					start Learning
				</Link> */}
				{/* <a href="https://codewith-tedb.blogspot.com/" className="btn-main-offer">About Me</a> */}
				
			</div>
		</div>
	);
};
export default Header;
