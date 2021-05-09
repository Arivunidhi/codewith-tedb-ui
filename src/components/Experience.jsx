import React from 'react';

const Experience = () => {
	return (
		<div id="experience" className="experience">
			<div className="d-flex justify-content-center my-5">
				<h1>experience</h1>
			</div>
			<div className="container experience-wrapper">
				{/* {} */}
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2019-Present</h3>
						<p>
							<strong>Onward Technologies Limited</strong>
						</p>
						<p className="timeline-domain">Engineering Automation</p>
						<p>{`HTML5,CSS3,JavaScript(ES6),React,BootStrap,
						Java,J2EE,Spring,Hibernate,Webservices,Microservices,
						Kubernetes,Docker,Git,Kafka,
						Maven,AWS,nginx,SQL,MongoDB,Python,Azure`}</p>
					</div>
				</div>
				{/*  */}
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2012-2019</h3>
						<p>
							<strong>Tagit India Pvt Ltd.</strong>
						</p>
						<p className="timeline-domain">
							Banking | Financial Service | Loans | HP | Leasing
						</p>
						<p>
							{`Java, Oracle, SOAP/REST Web services, MyBatis, Apache 2.4, JBoss EAP, ISO-8583, MSSQL, Hibernate, Spring Core, Spring MVC, Spring AOP, Maven, Mobeix.`}
						</p>
					</div>
				</div>
				{/*  */}
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2012-2012</h3>
						<p>
							<strong>NIIT Technologies, Chennai, India.</strong>
						</p>

						<p className="timeline-domain">Diploma in JAVA Technologies</p>
						<p>{`Java SE, J2EE & Oracle SQL.
							`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
