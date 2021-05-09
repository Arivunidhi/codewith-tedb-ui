import React from 'react';
import author from '../images/about-me.JPEG';

const AboutMe = () => {
	return (
		<div id="about" className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={author} alt="author...." />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">about me</h1>
					<ul className="about-list">
						<li className="about-para">
							Hello! I am Arivunidhi. Software Developer with 8+ years’
							Experience in Enterprise-level Implementation of SDLC, including
							Architecture, Functional, Technical Design & Full stack
							Development.
						</li>
						<li className="about-para">
							Core expertise in Java, J2EE, React, Python, Javascript,
							Bootstrap, SQL, MongoDB, Web-services, Spring, Spring Boot,
							Security, Kafka, Redis, myBatis & Hibernate.
						</li>
						<li className="about-para">
							Proficient in Maven, Git, AWS services - EC2, S3, RDS, EKS,
							Lambda, Elastic Beanstalk, API Gateways, Microservices and
							deployed applications in nginx, Apache httpd, JBoss and
							Orchestrated Docker container cluster using Kubernetes.
						</li>
						<li className="about-para">
							Actively followed Agile methodology (SCRUM); Played Scrum Master
							role; Standardized projects by implementing CI/CD.
						</li>
						<li className="about-para">
							Oracle Certified Java Programmer, SCRUM Fundamental & MongoDB
							Basics Certified
						</li>
					</ul>

					{/* <p className="about-para">
						Hello! I am Arivunidhi. A dynamic professional with 8+ years’
						experience in enterprise-level implementation of the Software
						Development Life-Cycle (SDLC), including Architecture, Functional
						&Technical design, Full stack Development, Enhancements on various
						digital channels of banking, financial services and engineering
						automation. Core expertise in technologies like Java, J2EE, React,
						Python, Javascript, Bootstrap, SQL, MongoDB, Web-services, Spring
						Boot, Security, Kafka, myBatis & Hibernate; Diverse experience
						utilizing tools in N-tier and Microservices architecture
						applications. Good Knowledge in Maven, Git, AWS services - EC2, S3,
						RDS, EKS, Lambda, Elastic Beanstalk, API Gateways and deployed
						applications in nginx, Apache httpd, JBoss and Orchestrated Docker
						container cluster using Kubernetes. Proficient leadership and team
						management skills; effective team builder; Ability to plan project &
						resources, stakeholders need, manage deadlines & risks. Prototype
						ideas quickly using cutting edge technologies. Leveraging retail
						banking, digital wallets & financial services domain expertise
						including functions likes Payments, Mobility, Payment Gateways,
						Hire-Purchase, Leasing and Loans. Closely worked with engineers,
						architects, managers, design & QA; Manage project life cycles
						through close-co-ordination between stake holders
						(Business/Vendor/Operations/IT). Actively followed Agile methodology
						(SCRUM); Played Scrum Master role; Standardized projects by
						implementing Domain Driven Design & Continuous Integration.
					</p> */}
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
