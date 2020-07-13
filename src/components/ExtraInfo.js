import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Poster_not_available from './poster_not_available.png';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			type: 'tween',
			duration: 0.1,
		},
	},
};

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
		<motion.div variants={containerVariants} initial='hidden' animate='visible'>
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
						<div className='popup-buttons'>
							<h4 className='popup-rating'>{Rated}</h4>
							<h4 className='popup-runtime'>{Runtime}</h4>
							<div className='popup-imdb'>
								{Ratings && <h4>IMDB: {Ratings[0].Value}</h4>}
							</div>
						</div>
						{/* <div className='popup-genre'>{Genre}</div> */}
					</div>
				</div>
				<button
					className='btn popup-add'
					onClick={() => {
						setShowInfo(false);
						addButton(Title, Poster);
					}}
				>
					Add
				</button>
			</div>
		</motion.div>
	);
};

export default ExtraInfo;
