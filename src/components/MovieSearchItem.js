import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import ExtraInfo from './ExtraInfo';
import Poster_not_available from './poster_not_available.png';
// import axios from 'axios';

const MovieSearchItem = ({ movie }) => {
	const {
		extraInfo,
		searchExtraInfo,
		setShowInfo,
		showInfo,
		setIsGreyedOut,
		addButton,
	} = useContext(MovieContext);

	const { Title, Poster } = movie;

	const handleInfoButton = (e) => {
		e.preventDefault();
		searchExtraInfo(movie.Title);
		setIsGreyedOut('on');
		setShowInfo(true);
	};

	return (
		<div className='search-title-and-item'>
			<div className='search-title'>
				<h2>{Title}</h2>
			</div>
			<div className='search-item'>
				<button className='btn btn-info' onClick={handleInfoButton}>
					+
				</button>
				<div className='search-box-shadow'></div>
				<img
					className='search-img'
					src={Poster === 'N/A' ? Poster_not_available : Poster}
					alt={Title}
				/>
				<button className='btn btn-add' onClick={() => addButton(Title)}>
					Add
				</button>
				<div>
					{showInfo && (
						<ExtraInfo extraInfo={extraInfo} setShowInfo={setShowInfo} />
					)}
				</div>
			</div>
		</div>
	);
};

export default MovieSearchItem;
