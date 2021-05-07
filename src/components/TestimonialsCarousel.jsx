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
					<h3>Axis Bank</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
						distinctio quod adipisci voluptates? Omnis maxime magnam tempore!
						Iste, beatae rem.
					</p>
				</div>
			</>
			<>
				<img src={client2} alt="Lime Wallet" />
				<div className="myCarousel">
					<h3>Lime Wallet</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
						distinctio quod adipisci voluptates? Omnis maxime magnam tempore!
						Iste, beatae rem.
					</p>
				</div>
			</>
			<>
				<img src={client3} alt="Commercial Bank of Dubai" />
				<div className="myCarousel">
					<h3>Commercial Bank of Dubai</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
						distinctio quod adipisci voluptates? Omnis maxime magnam tempore!
						Iste, beatae rem.
					</p>
				</div>
			</>
			<>
				<img src={client4} alt="Mauritius Commercial Bank" />
				<div className="myCarousel">
					<h3>Mauritius Commercial Bank</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
						distinctio quod adipisci voluptates? Omnis maxime magnam tempore!
						Iste, beatae rem.
					</p>
				</div>
			</>
			<>
				<img src={client5} alt="Rogers Capital" />
				<div className="myCarousel">
					<h3>Rogers Capital</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
						distinctio quod adipisci voluptates? Omnis maxime magnam tempore!
						Iste, beatae rem.
					</p>
				</div>
			</>
			<>
				<img src={client6} alt="Caterpillar" />
				<div className="myCarousel">
					<h3>Caterpillar</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
						distinctio quod adipisci voluptates? Omnis maxime magnam tempore!
						Iste, beatae rem.
					</p>
				</div>
			</>
		</Carousel>
	);
};

export default TestimonialsCarousel;
