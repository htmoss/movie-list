import React from 'react';
import Navbar from './components/Navbar';
import MovieContextProvider from './context/MovieContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Ratings from './components/pages/Ratings';
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
							<Route exact path='/ratings' component={Ratings} />
							<Route exact path='/about' component={About} />
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
