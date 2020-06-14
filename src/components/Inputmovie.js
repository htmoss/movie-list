import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';

const Inputmovie = () => {
	const { searchMovies } = useContext(MovieContext);
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		searchMovies(title);
		setTitle('');
	};

	return (
		<div className='container' onSubmit={handleSubmit}>
			<form className='input-movie-form'>
				<div className='title'>
					<label htmlFor='movie'>Movie Title</label>
					<input
						type='text'
						name='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<input className='submit' type='submit' value='Search Movie' />
			</form>
		</div>
	);
};

export default Inputmovie;
