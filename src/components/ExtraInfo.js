import React from 'react';

const ExtraInfo = ({ extraInfo, setShowInfo }) => {
	return (
		<div>
			<div className='popup'>
				<button className='btn' onClick={() => setShowInfo(false)}>
					x
				</button>
				<h1>{extraInfo.Title}</h1>
				<h4>({extraInfo.Year})</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum animi
					dolores, dicta quas necessitatibus enim.
				</p>
			</div>
			<div className='grey-out'></div>
		</div>
	);
};

export default ExtraInfo;
