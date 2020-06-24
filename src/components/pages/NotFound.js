import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ location }) => {
	return (
		<div>
			<h1 className='page-title'>Page Not Found</h1>
			<br />
			<p className='lead'>
				The page you are looking for <em>{location.pathname}</em> does not
				exist.
			</p>
			<br />
			<div className='go-home'>
				<Link to='/' className='btn'>
					Go back to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
