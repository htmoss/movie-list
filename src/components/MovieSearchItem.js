import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import ExtraInfo from './ExtraInfo';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const MovieSearchItem = ({ movie }) => {
	const {
		addMovie,
		setMovieSearchList,
		extraInfo,
		searchExtraInfo,
		setShowInfo,
		showInfo,
	} = useContext(MovieContext);

	const { Title, Poster } = movie;
	const handleAddButton = (movie) => {
		addMovie(movie.Title);
		setMovieSearchList([]);
	};

	const handleInfoButton = (e) => {
		e.preventDefault();
		searchExtraInfo(movie.Title);
		setShowInfo(true);
	};

	return (
		<div className='search-item'>
			<h2>{Title}</h2>
			{Poster !== 'N/A' && <img src={Poster} alt={Title} />}
			<button className='btn info-btn' onClick={handleInfoButton}>
				More Info
			</button>
			<button className='btn add-btn' onClick={() => handleAddButton(movie)}>
				Add
			</button>
			<div>
				{showInfo && (
					<ExtraInfo extraInfo={extraInfo} setShowInfo={setShowInfo} />
				)}
			</div>
		</div>
	);
};

export default MovieSearchItem;
