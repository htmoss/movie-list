import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const MovieContext = createContext();

const KEY = '7d362a01';

const MovieContextProvider = (props) => {
	const [movieSearchList, setMovieSearchList] = useState([]);
	const [showInfo, setShowInfo] = useState(false);
	const [extraInfo, setExtraInfo] = useState([]);
	const [loading, setLoading] = useState(false);

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
		setLoading(true);

		const res = await axios
			.get(`https://www.omdbapi.com/?s=${title}&apikey=${KEY}&r=json/`)
			.catch(console.log('AXIOS ERROR'));
		console.log(res.data);
		setMovieSearchList(res.data.Search);
		setLoading(false);
	};

	const searchExtraInfo = async (Title) => {
		setLoading(true);

		const res = await axios
			.get(`https://www.omdbapi.com/?t=${Title}&apikey=${KEY}&r=json/`)
			.catch(console.log('AXIOS ERROR'));
		console.log(res.data);
		setExtraInfo(res.data);
		console.log(extraInfo);

		setLoading(false);
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
				setLoading,
				loading,
				movieSearchList,
				setMovieSearchList,
				searchExtraInfo,
				extraInfo,
				setExtraInfo,
				showInfo,
				setShowInfo,
				KEY,
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;
