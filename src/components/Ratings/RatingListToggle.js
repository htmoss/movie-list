import React, { useContext } from 'react';
import { PosterToggleContext } from '../../context/PosterToggleContext';

let theme = 'left';

const RatingListToggle = () => {
	const { showPosters, setShowPosters } = useContext(PosterToggleContext);

	const onClick = (e) => {
		setShowPosters(!showPosters);
		if (showPosters) {
			theme = 'left';
		} else {
			theme = 'right';
		}
	};
	return (
		<div className='view-btns'>
			<button className={`btn btn-list-${theme}`} onClick={onClick}>
				List View
			</button>
			<button className={`btn btn-poster-${theme}`} onClick={onClick}>
				Poster View
			</button>
		</div>
	);
};

export default RatingListToggle;
