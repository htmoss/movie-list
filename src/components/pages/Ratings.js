import React, { Fragment } from 'react';
import Ratingslist from '../Ratings/RatingsList';

const Ratings = () => {
	return (
		<Fragment>
			<h1 className='page-title'>Rated Movies</h1>
			<Ratingslist />
		</Fragment>
	);
};

export default Ratings;
