import React, { Fragment } from 'react';
import Ratingslist from '../Ratings/RatingsList';
import RatingListToggle from '../Ratings/RatingListToggle';
import PosterToggleContextProvider from '../../context/PosterToggleContext';

const Ratings = () => {
	return (
		<Fragment>
			<h1 className='page-title'>Rated Movies</h1>
			<PosterToggleContextProvider>
				<RatingListToggle />
				<Ratingslist />
			</PosterToggleContextProvider>
		</Fragment>
	);
};

export default Ratings;
