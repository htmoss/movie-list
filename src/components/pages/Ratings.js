import React from 'react';
import Ratingslist from '../Ratings/RatingsList';
import RatingListToggle from '../Ratings/RatingListToggle';
import PosterToggleContextProvider from '../../context/PosterToggleContext';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		x: '100vw',
	},
	visible: {
		x: 0,
		transition: {
			type: 'spring',
			mass: 0.4,
		},
	},
};

const Ratings = () => {
	return (
		<motion.div variants={containerVariants} initial='hidden' animate='visible'>
			<h1 className='page-title'>Rated Movies</h1>
			<PosterToggleContextProvider>
				<RatingListToggle />
				<Ratingslist />
			</PosterToggleContextProvider>
		</motion.div>
	);
};

export default Ratings;
