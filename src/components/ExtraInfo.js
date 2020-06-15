import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const ExtraInfo = ({ extraInfo }) => {
	const { setShowInfo, setIsGreyedOut, addButton } = useContext(MovieContext);
	const {
		Title,
		Poster,
		Year,
		Plot,
		Genre,
		Rated,
		Ratings,
		Runtime,
	} = extraInfo;

	return (
		<div>
			<div className='popup'>
				<button
					className='btn'
					onClick={() => {
						setShowInfo(false);
						setIsGreyedOut('off');
					}}
				>
					x
				</button>
				{Poster !== 'N/A' && <img src={Poster} alt={Title} />}
				<h1>{Title}</h1>
				<h4>({Year})</h4>
				<h4>
					{Runtime} | Rated: {Rated}
				</h4>
				<div>{Ratings && <p>IMDB: {Ratings[0].Value}</p>}</div>
				<p>{Plot !== 'N/A' ? Plot : null}</p>
				<div>{Genre}</div>
				<button
					className='btn'
					onClick={() => {
						addButton(Title);
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default ExtraInfo;
