import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { NavLink } from 'react-router-dom';
import { MdMovie, MdInfo, MdStarHalf } from 'react-icons/md';

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
						<NavLink exact={true} to='/'>
							<i>
								<MdMovie />
								<span>List</span>
							</i>
						</NavLink>
					</li>
					<li>
						<NavLink to='/ratings'>
							<i>
								<MdStarHalf />
								<span>Ratings</span>
							</i>
						</NavLink>
					</li>
					<li>
						<NavLink to='/about'>
							<i>
								<MdInfo />
								<span>About</span>
							</i>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
