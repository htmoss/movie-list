import React, { createContext, useState } from 'react';

export const PosterToggleContext = createContext();

const PosterToggleContextProvider = (props) => {
	const [showPosters, setShowPosters] = useState(false);

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
