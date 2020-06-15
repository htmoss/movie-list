import React, { Fragment } from 'react';
import BoxContextProvider from '../../context/BoxContext';
import Movielist from '../Movielist';
import Inputmovie from '../Inputmovie';
import MovieResults from '../MovieResults';

const Home = () => {
	return (
		<Fragment>
			<BoxContextProvider>
				<Movielist />
			</BoxContextProvider>

			<Inputmovie />

			<MovieResults />
		</Fragment>
	);
};

export default Home;
