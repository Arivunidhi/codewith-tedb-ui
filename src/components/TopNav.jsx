import React, {Component} from 'react';
import svglogo from '../images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';

export default class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: false,
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({menu: !this.state.menu});
	}

	render() {
		const show = this.state.menu ? 'show' : '';
		// console.log('show:', show);
		let button;
		// console.log('props:::', this.props);
		if (!this.props.isHome) {
			button = (
				<Link
					smooth={true}
					onClick={this.toggleMenu}
					to="header"
					offset={-110}
					className="nav-link"
					href="#">
					Home <span className="sr-only">(current)</span>
				</Link>
			);
		} else {
			button = (
				<RouterLink onClick={this.toggleMenu} className="nav-link" to="/home">
					Home
				</RouterLink>
			);
		}

		return (
			<nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
				<div className="container">
					<RouterLink to="/home" className="navbar-brand">
						<img
							// style={{width: '200px'}}
							src={svglogo}
							alt="log..."
							className="logo"
						/>
					</RouterLink>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={this.toggleMenu}>
						<FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
					</button>
					<div className={'collapse navbar-collapse ' + show}>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">{button}</li>
							<li className="nav-item">
								<Link
									smooth={true}
									onClick={this.toggleMenu}
									to="about"
									offset={-91}
									className="nav-link">
									About Me
								</Link>
							</li>
							<li className="nav-item">
								<Link
									smooth={true}
									onClick={this.toggleMenu}
									to="service"
									offset={-91}
									className="nav-link"
									href="#">
									Expertise
								</Link>
							</li>
							<li className="nav-item">
								<Link
									smooth={true}
									onClick={this.toggleMenu}
									to="experience"
									offset={-91}
									className="nav-link"
									href="#">
									experience
								</Link>
							</li>

							{/* <li className="nav-item">
								<Link
									smooth={true}
									onClick={this.toggleMenu}
									to="testimonials"
									offset={-91}
									className="nav-link"
									href="#">
									Clients
								</Link>
							</li> */}
							<li className="nav-item">
								<Link
									smooth={true}
									onClick={this.toggleMenu}
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
	}
}
