import React from 'react';

import {faHtml5, faUbuntu, faJava} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloud} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
	return (
		<div id="service" className="services">
			<h1 className="py-5">my services</h1>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="cirlce">
								<FontAwesomeIcon className="icon" icon={faHtml5} size="2x" />
							</div>

							<h3>Front-End</h3>
							<p>{`Learn frond end technologies like HTML5, 
							CSS3,
							BootStrap,
							JavaScript(ES6),
							React`}</p>
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
								{`Learn back end technologies like Java,
								J2EE,
								Spring,
								Hibernate,
								Webservices,
								Microservices`}
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
								{`Learn DevOps technologies like Kubernetes,
								Docker,
								Git,
								Kafka,
								Maven,
								AWS,
								nginx,
								JBoss,
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
								{`Learn Other technologies like SQL,
								MongoDB,
								Python,
								Datastructures,
								Algorithm, Agile (SRUM)`}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
