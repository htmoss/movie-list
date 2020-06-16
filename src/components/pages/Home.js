import React, { Fragment } from 'react';
import BoxContextProvider from '../../context/BoxContext';
import Movielist from '../Movielist';
import Inputmovie from '../Inputmovie';
import MovieResults from '../MovieResults';

const Home = () => {
	return (
		<Fragment>
			<h1 className='page-title'>Movies to Watch</h1>
			<BoxContextProvider>
				<Movielist />
			</BoxContextProvider>

			<Inputmovie />

			<MovieResults />
		</Fragment>
	);
};

export default Home;
