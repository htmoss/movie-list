import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const ExtraInfo = ({ extraInfo }) => {
	const { setShowInfo, setIsGreyedOut } = useContext(MovieContext);
	const { Title, Year, Plot, Genre, Rated, Ratings, Runtime } = extraInfo;

	const calcGenre = () => {
		const genreList = Genre.split(', ');
		return genreList.map((genre) => <li>{genre}</li>);
	};
	return (
		<div>
			<div className='popup'>
				<button
					className='btn'
					onClick={() => {
						setShowInfo(false);
						setIsGreyedOut('off');
					}}
				>
					x
				</button>
				<h1>{Title}</h1>
				<h4>({Year})</h4>
				{/* <p>
					IMDB: {Ratings[0].Value}, RT: {Ratings[1].Value}
				</p> */}
				<p>{Plot}</p>
				<ul>{calcGenre}</ul>
			</div>
			{/* <div className='grey-out'></div> */}
		</div>
	);
};

export default ExtraInfo;
