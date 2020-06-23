import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import { PosterToggleContext } from '../../context/PosterToggleContext';
import RatingItem from './RatingItem';
import RatingPoster from './RatingPoster';

const Ratingslist = () => {
	const { ratings } = useContext(MovieContext);
	const { showPosters } = useContext(PosterToggleContext);
	return ratings.length ? (
		<div>
			{showPosters ? (
				<ul className='rating-poster-list'>
					{ratings.map((rating) => {
						return <RatingPoster rating={rating} key={rating.id} />;
					})}
				</ul>
			) : (
				<ul className='rating-list'>
					{ratings.map((rating) => {
						return <RatingItem rating={rating} key={rating.id} />;
					})}
				</ul>
			)}
		</div>
	) : (
		<div className='empty'>
			You haven't rated any movies yet.
			<br />
		</div>
	);
};

export default Ratingslist;
