import React, { createContext, useState, useEffect } from 'react';

export const PosterToggleContext = createContext();

const PosterToggleContextProvider = (props) => {
	// const [showPosters, setShowPosters] = useState(false);

	const [showPosters, setShowPosters] = useState(() => {
		const localData = localStorage.getItem('showPosters');
		return localData ? JSON.parse(localData) : false;
	});

	useEffect(() => {
		localStorage.setItem('showPosters', JSON.stringify(showPosters));
	}, [showPosters]);

	return (
		<PosterToggleContext.Provider
			value={{
				showPosters,
				setShowPosters,
			}}
		>
			{props.children}
		</PosterToggleContext.Provider>
	);
};

export default PosterToggleContextProvider;
