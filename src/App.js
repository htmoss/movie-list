import React from 'react';
import Navbar from './components/Navbar';
import MovieContextProvider from './context/MovieContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Ratingslist from './components/Ratings/RatingsList';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Footer from './components/Layout/Footer';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<MovieContextProvider>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
							<Route exact path='/ratings' component={Ratingslist} />
							<Route path='*' component={NotFound} />
						</Switch>
					</div>
					<Footer />
				</MovieContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
