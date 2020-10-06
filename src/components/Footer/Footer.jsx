import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<div className='social'>
				<a href='https://ro-ro.facebook.com/'>
					<i className='fab fa-facebook fa-2x' />
				</a>
				<a href='https://twitter.com/?lang=ro'>
					<i className='fab fa-twitter fa-2x' />
				</a>
				<a href='https://www.youtube.com/'>
					<i className='fab fa-youtube fa-2x' />
				</a>
				<a href='https://ro.linkedin.com/'>
					<i className='fab fa-linkedin fa-2x' />
				</a>
			</div>
			<p>Copyright &copy; 2020 - Stefan Gruescu</p>
			<div>
				<Link to='/about' className='header-links h5 mr-3'>
					About
				</Link>
				<Link to='/terms' className='header-links h5'>
					Terms and Conditions
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
