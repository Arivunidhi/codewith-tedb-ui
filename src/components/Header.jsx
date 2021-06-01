import React from 'react';
import Typed from 'react-typed';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<div id="header" className="header-wrapper">
			<div className="main-info">
				<h1>Welcome to Codewith-TedB</h1>
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
				<a href="https://codewith-tedb.blogspot.com/" className="btn-main-offer">start Learning</a>
			</div>
		</div>
	);
};
export default Header;
