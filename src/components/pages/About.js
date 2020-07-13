import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		x: '100vw',
	},
	visible: {
		x: 0,
		transition: {
			type: 'spring',
			mass: 0.4,
		},
	},
};

const About = () => {
	return (
		<motion.div
			className='about'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			<h1 className='page-title'>About</h1>
			<p>Created by Henry Moss</p>
			<p>Version 1.2.0</p>
			<p>Created with React, HTML, CSS, SASS, & Framer Motion</p>
			<div className='about-instructions'>
				<h2>How does this work ?</h2>
				<h3>1. List Movies</h3>
				<p>
					In the List tab of the navbar, search for movies and tv shows that you
					want to make a note of seeing one day. add them to your list by
					hovering over the movie and pressing the "Add" button. You can also
					find more info on the movie by clicking the plus button on the top
					right of the poster.
				</p>
				<h3>2. Rate your movies</h3>
				<p>
					Once you watch one of the movies on your list, rate the movie by
					clicking the checkbox to the right of the movie title. On the popup,
					rate your movie on a score from one to ten. You can now find your
					movie on the Ratings tab of the website. Feel free to view your
					ratings in either the list view or poster view by clicking on their
					respective buttons.
				</p>
				<h3>That's all, folks!</h3>
				<p>
					Currently, that's the full funtionality of the website. I'll be trying
					my best to add new features when I can!
				</p>
			</div>
		</motion.div>
	);
};

export default About;
