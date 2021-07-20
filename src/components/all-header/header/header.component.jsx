import React from 'react';

import './header.styles.scss';


export default function Header() {


	return (
		<div className='header'>
			<header id="fh5co-header-section" class="sticky-banner">
				<div class="container">
					<div class="nav-header">
						{/* <a class="js-fh5co-nav-toggle fh5co-nav-toggle dark" /> */}
						<h1 id="fh5co-logo"><a href="index.html">Smooth Ride</a></h1>
						<nav id="fh5co-menu-wrap" role="navigation">
							<ul class="sf-menu" id="fh5co-primary-menu">
								<li class="active"><a href="index.html">Home</a></li>
								<li><a href="flight.html">Log-in</a></li>
								<li><a href="hotel.html">Sign-up</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}