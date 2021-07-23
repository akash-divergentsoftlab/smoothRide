import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';



export default function Header() {


	return (
		<div className='header'>
			<header id="fh5co-header-section" className="sticky-banner">
				<div className="container">
					<div className="nav-header">
						<h1 id="fh5co-logo"><Link to="/"> Smooth Ride</Link></h1>
						<nav id="fh5co-menu-wrap" role="navigation">
							<ul className="sf-menu" id="fh5co-primary-menu">
								<li className="active"><Link to="/">Home</Link></li>
								<li className="active"><Link to="/bookride">Book Now</Link></li>
								<li><Link to="/sigin-signup">Log-in</Link></li>
								<li><Link to="/sigin-signup">Sign-up</Link></li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Akash Poddar &nbsp;
										<img alt='' src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle" />
									</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
										<Link className="dropdown-item" to="/my-account">My Account</Link>
										<Link className="dropdown-item" to='/editprofile'>Edit Profile</Link>
										<Link className="dropdown-item" href="/#">Log Out</Link>
									</div>
								</li>

							</ul>

						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}