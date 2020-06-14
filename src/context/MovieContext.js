import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const MovieContext = createContext();

const KEY = '7d362a01';

const MovieContextProvider = (props) => {
	const [movieSearchList, setMovieSearchList] = useState([]);

	const [movies, setMovies] = useState(() => {
		const localData = localStorage.getItem('movies');
		return localData ? JSON.parse(localData) : [];
	});

	const [ratings, setRatings] = useState(() => {
		const localData = localStorage.getItem('ratings');
		return localData ? JSON.parse(localData) : [];
	});

	const addMovie = (Title) => {
		setMovies([...movies, { Title, id: uuidv4(), score: '' }]);
	};

	const deleteMovie = (id) => {
		setMovies(movies.filter((movie) => movie.id !== id));
	};

	const deleteRating = (id) => {
		setRatings(ratings.filter((rating) => rating.id !== id));
	};

	const searchMovies = async (title) => {
		const res = await axios
			.get(`http://www.omdbapi.com/?s=${title}&apikey=${KEY}`)
			.catch(console.log('AXIOS ERROR'));
		console.log(res.data);
		setMovieSearchList(res.data.Search);
	};

	useEffect(() => {
		localStorage.setItem('movies', JSON.stringify(movies));
	}, [movies]);

	useEffect(() => {
		localStorage.setItem('ratings', JSON.stringify(ratings));
	}, [ratings]);

	return (
		<MovieContext.Provider
			value={{
				movies,
				ratings,
				addMovie,
				deleteMovie,
				deleteRating,
				setRatings,
				searchMovies,
				movieSearchList,
				setMovieSearchList,
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;
