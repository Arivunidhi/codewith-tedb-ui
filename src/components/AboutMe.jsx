import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={author} alt="author...." />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">about me</h1>
					<p className="about-para">
						Hello! I am Arivunidhi. A dynamic professional with 8+ years’
						experience in enterprise-level implementation of the Software
						Development Life-Cycle (SDLC), including Architecture, Functional
						&Technical design, Full stack Development, Enhancements on various
						digital channels of banking, financial services and engineering
						automation. Core expertise in technologies like Java, J2EE, React,
						Python, Javascript, Bootstrap, SQL, MongoDB, Web-services, Spring
						Boot, Security, Kafka, myBatis & Hibernate; Diverse experience
						utilizing tools in N-tier and Microservices architecture
						applications. Immense Devops knowledge in Dockers, Kubernetes, Git,
						nginx, Apache httpd, Maven with cloud experience in AWS. Proficient
						leadership and team management skills; effective team builder;
						Ability to plan project & resources, stakeholders need, manage
						deadlines & risks. Prototype ideas quickly using cutting edge
						technologies. Leveraging retail banking, digital wallets & financial
						services domain expertise including functions likes Payments,
						Mobility, Payment Gateways, Hire-Purchase, Leasing and Loans.
						Closely worked with engineers, architects, managers, design & QA;
						Manage project life cycles through close-co-ordination between stake
						holders (Business/Vendor/Operations/IT). Actively followed Agile
						methodology (SCRUM); Played Scrum Master role; Standardized projects
						by implementing Domain Driven Design & Continuous Integration.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
