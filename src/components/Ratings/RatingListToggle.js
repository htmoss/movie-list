import React, { useContext } from 'react';
import { PosterToggleContext } from '../../context/PosterToggleContext';

const RatingListToggle = () => {
	const { showPosters, setShowPosters } = useContext(PosterToggleContext);

	const onChange = (e) => {
		setShowPosters(e.target.checked);
	};
	return (
		<div>
			<form>
				<label htmlFor='rating-poster-toggle'>Poster Mode</label>
				<input
					type='checkbox'
					name='rating-poster-toggle'
					checked={showPosters}
					onChange={onChange}
				/>
			</form>
		</div>
	);
};

export default RatingListToggle;
