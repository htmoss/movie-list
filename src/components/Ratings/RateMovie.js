import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import { v4 as uuidv4 } from 'uuid';

const RateMovie = (movie) => {
	const { setRatings, ratings } = useContext(MovieContext);

	const handleSubmit = ({ Title, id }) => {
		setRatings([...ratings, { Title, id: uuidv4() }]);
	};

	return (
		<div className='rating-popup'>
			<form onSubmit={handleSubmit(movie)}>
				<h2>What do you rate this movie?</h2>
				<select id='example'>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
				<button className='btn'>Add to Ratings</button>
			</form>
		</div>
	);
};

export default RateMovie;
