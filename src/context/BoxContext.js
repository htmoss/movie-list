import React, { createContext, useState } from 'react';

export const BoxContext = createContext();

const BoxContextProvider = (props) => {
	const [showRateBox, setShowRateBox] = useState(false);

	return (
		<BoxContext.Provider
			value={{
				showRateBox,
				setShowRateBox,
			}}
		>
			{props.children}
		</BoxContext.Provider>
	);
};

export default BoxContextProvider;
