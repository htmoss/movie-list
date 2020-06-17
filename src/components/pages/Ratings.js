import React, { Fragment } from 'react';
// import BoxContextProvider from '../../context/BoxContext';
// import Movielist from '../Movielist';
// import Inputmovie from '../Inputmovie';
// import MovieResults from '../MovieResults';
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
