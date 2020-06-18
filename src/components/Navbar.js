import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const { movies, ratings } = useContext(MovieContext);
	return (
		<div className='navbar'>
			<h1>Movie List</h1>
			<h4>Make a movie list, watch them, and rate them!</h4>
			<p>
				Movies to watch: {movies.length} | Movies rated: {ratings.length}
			</p>
			<div className='page-list-bar'>
				<ul className='page-list'>
					<li>
						<NavLink to='/'>Watch List</NavLink>
					</li>
					<li>
						<NavLink to='/ratings'>Rating List</NavLink>
					</li>
					<li>
						<NavLink to='/about'>About</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
