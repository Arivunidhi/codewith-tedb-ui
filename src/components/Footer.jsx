import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	RedditShareButton,
	RedditIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from 'react-share';

const Footer = () => {
	return (
		<div id="footer" className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>Contact us @</p>
						</div>
						<div className="d-flex">
							{/* <a href="tel:+919025565614">+91-9025565614</a> */}
						</div>
						<div className="d-flex">
							<p>arivunidhi90.info@gmail.com</p>
						</div>
					</div>
					<div className="col-log-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								{/* <a className="footer-nav" href="">
									Home
								</a>
								<br />
								<a className="footer-nav" href="">
									About Me
								</a>
								<br />
								<a className="footer-nav" href="">
									Services
								</a>
							</div>
							<div className="col">
								<a className="footer-nav" href="">
									Experience
								</a>
								<br />
								<a className="footer-nav" href="">
									Portfolio
								</a>
								<br />
								<a className="footer-nav" href="">
									Contacts
								</a> */}
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<div className="d-flex justify-content-center">
							<FacebookShareButton
								url={'https://www.facebook.com/arivu1/'}
								quote={'Fullstack developer'}
								hashtag="#javascript">
								<FacebookIcon className="mx-3" size={36} />
							</FacebookShareButton>
							<TwitterShareButton
								url={'https://twitter.com/Arivunidhi90/'}
								quote={'Fullstack developer'}
								hashtag="#javascript">
								<TwitterIcon className="mx-3" size={36} />
							</TwitterShareButton>
							<RedditShareButton
								url={'https://twitter.com/Arivunidhi90/'}
								quote={'Fullstack developer'}
								hashtag="#javascript">
								<RedditIcon className="mx-3" size={36} />
							</RedditShareButton>
							<LinkedinShareButton
								url={'https://www.linkedin.com/in/arivunidhi/'}
								quote={'Fullstack developer'}
								hashtag="#javascript">
								<LinkedinIcon className="mx-3" size={36} />
							</LinkedinShareButton>
						</div>
						<p className="pt-3 text-center">
							Copyright &copy;
							{new Date().getFullYear()}&nbsp;Codewith-TedB | All Rights
							Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
