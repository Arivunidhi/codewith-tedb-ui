import React from 'react';

import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons';

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
							<h3>Web Design</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
								ipsum quaerat consequatur voluptates sed, veritatis repudiandae
								iusto!
							</p>
						</div>
					</div>
					{/* -*/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="cirlce">
								<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
							</div>
							<h3>Web Development</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
								nam harum molestiae expedita,
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
							<h3>Java Development</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
								itaque provident possimus reiciendis
							</p>
						</div>
					</div>
					{/* -*/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="cirlce">
								<FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
							</div>
							<h3>AWS Development</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
								itaque provident possimus reiciendis
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
