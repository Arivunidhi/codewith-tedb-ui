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
							Hello! I am Arivunidhi. Full Stack Java Developer with 8+ years of IT experience in enterprise web application development on various digital channels of Banking 🏦, Financial Services 💸, Engineering 🚜 & Automobile Industry 🚗.
						</li>
						<li className="about-para">
						Broad experience in all stages of the software development life-cycle starts from planning, design, development, unit testing, architecture, development, deployment, & support.

						</li>
						<li className="about-para">
						Proficient in Leadership, Team Management, Communication & Analytical skills; Effective team builder with strong organizational & analytical skills; Ability to plan project & resources, stakeholders' needs, manage deadlines & risks.
						</li>
						<li className="about-para">
						Interested in writing Technical Blogs, prototype ideas using cutting-edge technologies. Areas of interest in Full-stack web development, Back-end development, Technical Lead, and Technical Architect.
						</li>
						<li className="about-para">
						Apart from professional life, I use travel ✈️ as an escape from daily life and it energizes me to meet new people. Travel inspires me to learn more, think more, and to better serve our world 🌍 community.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
