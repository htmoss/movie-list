import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieItem from './MovieItem';

const Movielist = () => {
	const { movies, isGreyedOut } = useContext(MovieContext);

	return movies.length ? (
		<div className='container'>
			<ul className='movie-list'>
				{movies.map((movie) => {
					return <MovieItem movie={movie} key={movie.id} />;
				})}
			</ul>
			<div className={`grey-${isGreyedOut}`}></div>
		</div>
	) : (
		<div className='empty'>No movies to watch!</div>
	);
};

export default Movielist;
