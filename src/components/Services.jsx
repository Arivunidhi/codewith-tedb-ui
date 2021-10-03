import React from 'react';

import {faHtml5, faUbuntu, faJava} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloud} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
	return (
		<div id="service" className="services">
			<h1 className="py-5">my expertise</h1>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="cirlce">
								<FontAwesomeIcon className="icon" icon={faHtml5} size="2x" />
							</div>

							<h3>Front-End</h3>
							<p>{`HTML5, 
							CSS3,
							BootStrap,
							JavaScript(ES6),
							React, Angular`}</p>
						</div>
					</div>
					{/* -*/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="cirlce">
								<FontAwesomeIcon className="icon" icon={faJava} size="2x" />
							</div>
							<h3>Back-End</h3>
							<p>
								{`Java,
								J2EE,
								Spring Boot,
								Hibernate,
								Webservices,
								Microservices,Junit, Mockito,Python.`}
							</p>
						</div>
					</div>
					{/* -*/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="cirlce">
								<FontAwesomeIcon className="icon" icon={faUbuntu} size="2x" />
							</div>
							<h3>DevOps</h3>
							<p>
								{`Kubernetes,
								Docker,
								Git, Gradle,
								Kafka,
								Maven,
								AWS,
								nginx,
								JBoss,Jenkins,
								Heroku`}
							</p>
						</div>
					</div>
					{/* -*/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="cirlce">
								<FontAwesomeIcon className="icon" icon={faCloud} size="2x" />
							</div>
							<h3>Others</h3>
							<p>
								{`SQL,
								MongoDB,
								Jira, Rally, 
								TDD/BDD, Agile (SRUM)`}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
