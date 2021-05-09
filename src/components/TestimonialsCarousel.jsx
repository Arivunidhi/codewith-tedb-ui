import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import client1 from '../images/clients/axis-2.png';
import client2 from '../images/clients/lime-2.png';
import client3 from '../images/clients/cbd-2.png';
import client4 from '../images/clients/mcb-2.png';
import client5 from '../images/clients/rc-2.png';
import client6 from '../images/clients/cat-2.png';

const TestimonialsCarousel = () => {
	return (
		<Carousel
			showArrows={true}
			infiniteLoop={true}
			showThumbs={false}
			showStatus={false}
			autoPlay={true}
			interval={3000}>
			<>
				<img src={client1} alt="Axis Bank" />
				<div className="myCarousel">
					<h3>Axis Mobile by Axis Bank Limited, Mumbai, India.</h3>
					<p>
						Axis Mobile is a simple and secure mobile banking application from
						Axis Bank. This channel will provide financial services including:
						Savings/Current/Credit/Fixed deposit/Recurring Deposit Account
						access and Make immediate or scheduled fund transfers to Axis Bank,
						Other Bank customers through NEFT/IMPS. Receive Alerts &
						Notifications, view account balance, near me offers in Apple Watch.
					</p>
				</div>
			</>
			<>
				<img src={client2} alt="Lime Wallet" />
				<div className="myCarousel">
					<h3>Lime by Axis Bank Limited, Mumbai, India.</h3>
					<p>
						LIME a digital wallet offered by Axis Bank. Enables any individual
						to transact and manage money through a single mobile app. Offers
						mobile wallet, online, offline payments and a seamless in-app
						shopping & ticketing experience. Users can make wallet to wallet
						payments, wallet to other bank account payments. Interfaced Lime as
						a Payment gateway solution to third party merchants like Amazon,
						flip kart.
					</p>
				</div>
			</>
			<>
				<img src={client3} alt="Commercial Bank of Dubai" />
				<div className="myCarousel">
					<h3>Attijari Mobile Banking(Commercial Bank of Dubai)</h3>
					<p>
						Attijari Mobile Banking is a retail banking service offered by
						Commercial bank of Dubai. Key features are account summary, account
						balance, Transfer funds between your accounts, to other CBD accounts
						or external accounts & Pay your utility bills. Locate your nearest
						CBD Branches and ATMs. Stay updated on CBD’s latest products,
						services and promotions.
					</p>
				</div>
			</>
			<>
				<img src={client4} alt="Mauritius Commercial Bank" />
				<div className="myCarousel">
					<h3>Juice by Mauritius Commercial Bank, Mauritius.</h3>
					<p>
						Juice, a mobile banking application offered by MCB, where you can
						make payments, transfer money to bank accounts, Pay pal account,
						visa direct/credit card payment and even withdraw cash instantly at
						ATMs. Receive push notifications on new promotions, search nearby
						ATM, Branches using GPS. Manage credit/debit cards for card
						activation, PIN change, reload prepaid card, settle card.
					</p>
				</div>
			</>
			<>
				<img src={client5} alt="Rogers Capital" />
				<div className="myCarousel">
					<h3>Rogers Capital Finance App</h3>
					<p>
						With Rogers Capital Finance App, Staff and Merchants can register,
						login, create easy loan application by selecting assets, get a quote
						from the supplier, apply for Hire purchase/Leasing/Loans and get
						instant approval. Effortless QR Scan search to identify customers,
						make a down payment, repay the outstanding amount & cancel a
						payment, download daily transaction reports and print/Reprint
						receipts through thermal printers. Customers can upload KYC
						documents, e-sign the electronic documents.
					</p>
				</div>
			</>
			<>
				<img src={client6} alt="Caterpillar" />
				<div className="myCarousel">
					<h3>Caterpillar Inc.</h3>
					<p>Engineering Automation tool development.</p>
				</div>
			</>
		</Carousel>
	);
};

export default TestimonialsCarousel;
