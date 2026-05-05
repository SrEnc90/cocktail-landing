import React from 'react';
import { useState } from 'react';
import { ALL_COCKTAILS } from '../../constants';

const Menu = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<section id="menu" aria-labelledby="menu-heading">
			<img
				src="/images/slider-left-leaf-png"
				alt="left-leaf"
				id="m-left-leaf"
			/>
			<img
				src="/images/slider-right-leaf-png"
				alt="right-leaf"
				id="m-right-leaf"
			/>

			<h2 id="menu-heading" className="sr-only">
				Cocktail Menu
			</h2>

			<nav className="cocktail-tabs" aria-label="Cocktail Navigation">
				{ALL_COCKTAILS.map((cocktail, index) => {
					const isActive = index === currentIndex;
					return <button key={cocktail.id}>{cocktail.name}</button>;
				})}
			</nav>
		</section>
	);
};

export default Menu;
