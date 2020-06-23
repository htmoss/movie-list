import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import Poster_not_available from '../poster_not_available.png';
import ExtraInfo from '../ExtraInfo';
import { AiFillDelete } from 'react-icons/ai';

const RatingPoster = ({ rating }) => {
	const {
		deleteRating,
		extraInfo,
		searchExtraInfo,
		setShowInfo,
		showInfo,
		setIsGreyedOut,
	} = useContext(MovieContext);
	const { Title, Poster, score } = rating;

	const handleInfoButton = (e) => {
		e.preventDefault();
		searchExtraInfo(Title);
		setIsGreyedOut('on');
		setShowInfo(true);
	};

	return (
		<li className='search-title-and-item'>
			<div className='search-title'>
				<h2>{Title}</h2>
			</div>
			<div className='search-item'>
				<button className='btn btn-info' onClick={handleInfoButton}>
					+
				</button>
				<div className='poster-delete' onClick={() => deleteRating(rating.id)}>
					<AiFillDelete />
				</div>
				<h1 className='poster-score'>{score}/10</h1>
				<div className='poster-box-shadow'></div>
				<img
					className='search-img'
					src={Poster === 'N/A' ? Poster_not_available : Poster}
					alt={Title}
				/>
				<div>
					{showInfo && (
						<ExtraInfo extraInfo={extraInfo} setShowInfo={setShowInfo} />
					)}
				</div>
			</div>
		</li>
	);
};

export default RatingPoster;
