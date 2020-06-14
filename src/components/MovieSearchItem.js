import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
// import { v4 as uuidv4 } from 'uuid';

const MovieSearchItem = ({ movie }) => {
	const { addMovie, setMovieSearchList } = useContext(MovieContext);
	const { Title, Poster } = movie;
	const handleAddButton = (movie) => {
		addMovie(movie.Title);
		setMovieSearchList([]);
	};

	return (
		<div className='search-item'>
			<h2>{Title}</h2>
			{Poster !== 'N/A' && <img src={Poster} alt={Title} />}
			<button className='btn add-btn' onClick={() => handleAddButton(movie)}>
				Add
			</button>
		</div>
	);
};

export default MovieSearchItem;
