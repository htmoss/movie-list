import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieSearchItem from './MovieSearchItem';
import { v4 as uuidv4 } from 'uuid';
import Spinner from './Layout/Spinner';

const MovieResults = () => {
	const { movieSearchList, loading } = useContext(MovieContext);

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div>
				<ul className='search-results'>
					{movieSearchList &&
						movieSearchList.map((movie) => (
							<MovieSearchItem movie={movie} key={uuidv4()} />
						))}
				</ul>
			</div>
		);
	}
};

export default MovieResults;
