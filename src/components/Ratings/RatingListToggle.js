import React, { useContext } from 'react';
import { PosterToggleContext } from '../../context/PosterToggleContext';

let theme = 'left';

const RatingListToggle = () => {
	const { setShowPosters } = useContext(PosterToggleContext);

	const onListClick = (e) => {
		setShowPosters(false);
		theme = 'left';
	};
	const onPosterClick = (e) => {
		setShowPosters(true);
		theme = 'right';
	};
	return (
		<div className='view-btns'>
			<button className={`btn btn-list-${theme}`} onClick={onListClick}>
				List View
			</button>
			<button className={`btn btn-poster-${theme}`} onClick={onPosterClick}>
				Poster View
			</button>
		</div>
	);
};

export default RatingListToggle;
