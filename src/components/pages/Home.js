import React, { Fragment } from 'react';
import BoxContextProvider from '../../context/BoxContext';
import Movielist from '../Movielist';
import Inputmovie from '../Inputmovie';
import MovieResults from '../MovieResults';
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

const Home = () => {
	return (
		<motion.div variants={containerVariants} initial='hidden' animate='visible'>
			<h1 className='page-title'>Movies to Watch</h1>
			<BoxContextProvider>
				<Movielist />
			</BoxContextProvider>
			<Inputmovie />
			<MovieResults />
		</motion.div>
	);
};

export default Home;
