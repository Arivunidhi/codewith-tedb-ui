import React from 'react';

import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Services = () => {
	return (
		<div id="service" className="services">
			<h1 className="py-5">my services</h1>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="cirlce">
								<FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
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
								<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
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
								<FontAwesomeIcon
									className="icon"
									icon={faFacebookF}
									size="2x"
								/>
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
								<FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
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
