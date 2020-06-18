import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { BoxContext } from '../context/BoxContext';
import { AiFillDelete } from 'react-icons/ai';

// import axios from 'axios';
import { GoCheck } from 'react-icons/go';

const MovieItem = ({ movie }) => {
	const { deleteMovie } = useContext(MovieContext);
	const { setShowRateBox } = useContext(BoxContext);

	return (
		<li className='movie-item'>
			<div className='list-item-text'>
				<div className='title'>{movie.Title}</div>
				{/* <div className='title'>{printInfo(movie)}</div> */}
			</div>
			<div className='list-buttons'>
				<div className='check' onClick={() => setShowRateBox(movie)}>
					<GoCheck />
				</div>
				<div className='delete' onClick={() => deleteMovie(movie.id)}>
					<AiFillDelete />
				</div>
			</div>
			<div></div>
		</li>
	);
};

export default MovieItem;
