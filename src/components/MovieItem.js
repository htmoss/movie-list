import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { BoxContext } from '../context/BoxContext';
import { AiFillDelete } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';
import { GoCheck } from 'react-icons/go';

const MovieItem = ({ movie }) => {
	const { deleteMovie, setRatings, ratings } = useContext(MovieContext);
	const { showRateBox, setShowRateBox } = useContext(BoxContext);
	const [score, setScore] = useState(1);

	const handleSubmit = (e) => {
		setScore(e.target.value);
		const newMovie = { Title: movie.Title, id: uuidv4(), score };
		console.log(newMovie);
		setRatings([...ratings, newMovie]);
		deleteMovie(movie.id);
		setShowRateBox(false);
	};

	return (
		<li className='movie-item'>
			<div className='list-item-text'>
				<div className='title'>{movie.Title}</div>
				{/* <div className='title'>{printInfo(movie)}</div> */}
			</div>
			<div className='list-buttons'>
				<div className='check' onClick={() => setShowRateBox(true)}>
					<GoCheck />
				</div>
				<div className='delete' onClick={() => deleteMovie(movie.id)}>
					<AiFillDelete />
				</div>
			</div>
			<div>
				{showRateBox && (
					// Pop up box to rate the movie before it goes to rated list
					<div>
						<div className='popup'>
							<button
								className='btn'
								onClick={(e) => {
									setShowRateBox(false);
									setScore(1);
								}}
							>
								X
							</button>
							<h2>What do you rate this movie?</h2>
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
							<button className='btn' type='submit' onClick={handleSubmit}>
								Add to Ratings
							</button>
						</div>
						<div className='grey-out'></div>
					</div>
				)}
			</div>
		</li>
	);
};

export default MovieItem;
