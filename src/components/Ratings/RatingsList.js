import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
// import MovieItem from '../MovieItem';
import RatingItem from './RatingItem';

const Ratingslist = () => {
	const { ratings } = useContext(MovieContext);
	return ratings.length ? (
		<div>
			<ul className='rating-list'>
				{ratings.map((rating) => {
					return <RatingItem rating={rating} key={rating.id} />;
				})}
			</ul>
		</div>
	) : (
		<div className='empty'>
			None here yet.
			<br />
			Go rate some movies!
		</div>
	);
};

export default Ratingslist;
