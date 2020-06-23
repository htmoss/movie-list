import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { BoxContext } from '../context/BoxContext';
import MovieItem from './MovieItem';
import { v4 as uuidv4 } from 'uuid';

const Movielist = () => {
	const { movies, isGreyedOut, setRatings, ratings, deleteMovie } = useContext(
		MovieContext
	);
	const { showRateBox, setShowRateBox } = useContext(BoxContext);
	const [score, setScore] = useState(1);

	const handleSubmit = ({ Title, id, Poster }) => {
		// setScore(e.target.value);
		const newMovie = { Title, id: uuidv4(), score, Poster };
		// console.log(newMovie);
		setRatings([...ratings, newMovie]);
		deleteMovie(id);
		setShowRateBox({});
	};

	function isEmpty(obj) {
		// null and undefined are "empty"
		if (obj == null) return true;

		// Assume if it has a length property with a non-zero value
		// that that property is correct.
		if (obj.length > 0) return false;
		if (obj.length === 0) return true;

		// If it isn't an object at this point
		// it is empty, but it can't be anything *but* empty
		// Is it empty?  Depends on your application.
		if (typeof obj !== 'object') return true;

		// Otherwise, does it have any properties of its own?
		// Note that this doesn't handle
		// toString and valueOf enumeration bugs in IE < 9
		for (var key in obj) {
			if (hasOwnProperty.call(obj, key)) return false;
		}

		return true;
	}

	return movies.length ? (
		<div>
			<div className={`grey-${isGreyedOut}`}></div>
			<div>
				{isEmpty(showRateBox) === false && (
					// Pop up box to rate the movie before it goes to rated list
					<div>
						<div className='popup-rate-movie'>
							<button
								className='btn btn-back'
								onClick={(e) => {
									setShowRateBox({});
									setScore(1);
								}}
							>
								<div className='x'>x</div>
							</button>
							<h2>
								What do you rate <br />
								<em>{showRateBox.Title}</em>?
							</h2>
							<select
								id='ratingNum'
								value={score}
								onChange={(e) => setScore(e.target.value)}
							>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
								<option value='6'>6</option>
								<option value='7'>7</option>
								<option value='8'>8</option>
								<option value='9'>9</option>
								<option value='10'>10</option>
							</select>
							<button
								className='btn'
								type='submit'
								onClick={(e) => {
									setScore(e.target.value);
									handleSubmit(showRateBox);
								}}
							>
								Add to Ratings
							</button>
						</div>
						<div className='grey-out'></div>
					</div>
				)}
			</div>
			<ul className='movie-list'>
				{movies.map((movie) => {
					return <MovieItem movie={movie} key={movie.id} />;
				})}
			</ul>
		</div>
	) : (
		<div className='empty'>No movies to watch!</div>
	);
};

export default Movielist;
