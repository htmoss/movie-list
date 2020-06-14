import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='container about'>
			<h1>Page Not Found</h1>
			<p className='lead'>The page you are looking for does not exist.</p>
			<br />
			<Link to='/'>Go back to Home</Link>
		</div>
	);
};

export default NotFound;
