import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import { AiFillDelete } from 'react-icons/ai';

const RatingItem = ({ rating }) => {
	const { deleteRating } = useContext(MovieContext);

	return (
		<li className='rating-item'>
			<div className='list-item-text'>
				<div className='title'>{rating.Title}</div>
			</div>
			<div className='list-buttons'>
				<div className='score'>{rating.score}/10</div>
				<div className='delete' onClick={() => deleteRating(rating.id)}>
					<AiFillDelete />
				</div>
			</div>
		</li>
	);
};

export default RatingItem;
