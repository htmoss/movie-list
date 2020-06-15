import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';

const Inputmovie = () => {
	const {
		searchMovies,
		clearResults,
		showClear,
		movieSearchList,
		alert,
		setAlert,
	} = useContext(MovieContext);
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title === '') {
			setAlert('Please enter a movie title.');
		} else {
			console.log('movieSearchList', movieSearchList);
			setAlert('');
			searchMovies(title);
			setTitle('');
		}
	};

	return (
		<div onSubmit={handleSubmit}>
			<form className='input-movie-form'>
				{alert !== '' && (
					<label className='alert' type='text'>
						{alert}
					</label>
				)}
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
				{showClear && (
					<button className='btn btn-clear' onClick={clearResults}>
						Clear
					</button>
				)}
			</form>
		</div>
	);
};

export default Inputmovie;
