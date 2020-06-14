import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieSearchItem from './MovieSearchItem';
import { v4 as uuidv4 } from 'uuid';

const MovieResults = () => {
	const { movieSearchList } = useContext(MovieContext);
	return (
		<div className='container'>
			<ul className='search-results'>
				{movieSearchList &&
					movieSearchList.map((movie) => (
						<MovieSearchItem movie={movie} key={uuidv4()} />
					))}
			</ul>
		</div>
	);
};

export default MovieResults;
