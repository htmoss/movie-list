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
	const [isGreyedOut, setIsGreyedOut] = useState('off');
	const [showClear, setShowClear] = useState(false);
	const [alert, setAlert] = useState('');

	const CancelToken = axios.CancelToken;
	const source = CancelToken.source();

	const [movies, setMovies] = useState(() => {
		const localData = localStorage.getItem('movies');
		return localData ? JSON.parse(localData) : [];
	});

	const [ratings, setRatings] = useState(() => {
		const localData = localStorage.getItem('ratings');
		return localData ? JSON.parse(localData) : [];
	});

	const checkClear = () => {
		console.log('movieSearchList', movieSearchList);
		movieSearchList &&
			(movieSearchList.totalResults !== '0' || movieSearchList === []
				? setShowClear(true)
				: setShowClear(false));
	};

	const addButton = (Title) => {
		setIsGreyedOut('off');
		addMovie(Title);
		setMovieSearchList([]);
		setShowClear(false);
	};

	const addMovie = (Title) => {
		setMovies([...movies, { Title, id: uuidv4(), score: '' }]);
	};

	const deleteMovie = (id) => {
		setMovies(movies.filter((movie) => movie.id !== id));
	};

	const deleteRating = (id) => {
		setRatings(ratings.filter((rating) => rating.id !== id));
	};

	const clearResults = () => {
		setMovieSearchList([]);
		setShowClear(false);
	};

	const searchMovies = async (title) => {
		setLoading(true);

		const res = await axios
			.get(`https://www.omdbapi.com/?s=${title}&apikey=${KEY}&r=json/`, {
				cancelToken: source.token,
			})
			.catch(console.log('AXIOS ERROR'));
		console.log(res.data);

		// filters out all non-movies from list
		if (res.data.Response === 'True') {
			const filteredSearch = res.data.Search.filter(
				(movie) => movie.Type === 'movie' || movie.Type === 'series'
			);
			setMovieSearchList(filteredSearch);
		} else {
			let errorMessage = res.data.Error;
			if (errorMessage === 'Too many results.') {
				errorMessage = 'Too many results. Please narrow down your search.';
			}
			setAlert(errorMessage);
		}
		checkClear();
		setLoading(false);
	};

	const searchExtraInfo = async (Title) => {
		// setLoading(true);

		const res = await axios
			.get(`https://www.omdbapi.com/?t=${Title}&apikey=${KEY}&r=json/`, {
				cancelToken: source.token,
			})
			.catch(console.log('AXIOS ERROR'));
		console.log(res.data);
		setExtraInfo(res.data);
		console.log(extraInfo);

		// setLoading(false);
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
				isGreyedOut,
				setIsGreyedOut,
				showClear,
				setShowClear,
				alert,
				setAlert,
				checkClear,
				clearResults,
				addButton,
				KEY,
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;
