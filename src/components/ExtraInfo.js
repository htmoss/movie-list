import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Poster_not_available from './poster_not_available.png';

const ExtraInfo = ({ extraInfo }) => {
	const { setShowInfo, setIsGreyedOut, addButton } = useContext(MovieContext);
	const {
		Title,
		Poster,
		Year,
		Plot,
		// Genre,
		Rated,
		Ratings,
		Runtime,
	} = extraInfo;

	return (
		<div>
			<div className='popup'>
				<div className='popup-top-info'>
					<h1>
						{Title} ({Year})
					</h1>
				</div>
				<div className='popup-info-and-img'>
					<img
						className='popup-img'
						src={Poster === 'N/A' ? Poster_not_available : Poster}
						alt={Title}
					/>
					<div className='popup-info'>
						<button
							className='btn btn-back'
							onClick={() => {
								setShowInfo(false);
								setIsGreyedOut('off');
							}}
						>
							<div className='x'>x</div>
						</button>
						<div className='popup-plot'>
							<p>{Plot !== 'N/A' ? Plot : null}</p>
						</div>
						<h4 className='popup-rating'>{Rated}</h4>
						<h4 className='popup-runtime'>{Runtime}</h4>
						<div className='popup-imdb'>
							{Ratings && <h4>IMDB: {Ratings[0].Value}</h4>}
						</div>
						{/* <div className='popup-genre'>{Genre}</div> */}
					</div>
				</div>
				<button
					className='btn popup-add'
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
