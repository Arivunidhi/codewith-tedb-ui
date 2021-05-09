import React, {Component} from 'react';
import svglogo from '../images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
			<div className="container">
				<Link smooth={true} to="header" className="navbar-brand" href="#">
					<img
						style={{width: '200px'}}
						src={svglogo}
						alt="log..."
						classname="logo"
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<RouterLink
								smooth={true}
								to="/home"
								offset={-110}
								className="nav-link"
								href="#">
								Home <span className="sr-only">(current)</span>
							</RouterLink>
						</li>
						<li className="nav-item">
							<Link
								smooth={true}
								to="about"
								offset={-91}
								className="nav-link"
								href="#">
								About Me
							</Link>
						</li>
						<li className="nav-item">
							<Link
								smooth={true}
								to="service"
								offset={-91}
								className="nav-link"
								href="#">
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link
								smooth={true}
								to="experience"
								offset={-91}
								className="nav-link"
								href="#">
								experience
							</Link>
						</li>

						<li className="nav-item">
							<Link
								smooth={true}
								to="testimonials"
								offset={-91}
								className="nav-link"
								href="#">
								Clients
							</Link>
						</li>
						<li className="nav-item">
							<Link
								smooth={true}
								to="footer"
								offset={-91}
								className="nav-link"
								href="#">
								Share
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
