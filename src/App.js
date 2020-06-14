import React from 'react';
import Navbar from './components/Navbar';
import Movielist from './components/Movielist';
import Inputmovie from './components/Inputmovie';
import MovieContextProvider from './context/MovieContext';
import MovieResults from './components/MovieResults';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Ratingslist from './components/Ratings/RatingsList';
import BoxContextProvider from './context/BoxContext';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<MovieContextProvider>
					<Navbar />
					<Route exact path='/'>
						<BoxContextProvider>
							<Movielist />
						</BoxContextProvider>
						<Inputmovie />
						<MovieResults />
					</Route>
					<Route path='/about' component={About} />
					<Route path='/ratings'>
						<Ratingslist />
						<Inputmovie />
					</Route>
				</MovieContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
