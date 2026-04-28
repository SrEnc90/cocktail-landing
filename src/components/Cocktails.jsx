import React from 'react';
import { COCKTAIL_LISTS } from '../../constants';

const Cocktails = () => {
	return (
		<section id="cocktails">
			<div className="noisy">
				<img src="/images/cocktail-left-leaf.png" alt="left-leaf" />
				<img src="/images/cocktail-right-leaf.png" alt="right-leaf" />

				<div className="list">
					<div className="popular">
						<h2>Most popular cocktails</h2>
						<ul>
							{COCKTAIL_LISTS.map(
								({ name, country, detail, price }) => (
									<li key={name}>
										<div className="md:me-28">
											<h3>{name}</h3>
											<p>
												{country} | {detail}
											</p>
										</div>
										<span>- {price}</span>
									</li>
								),
							)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cocktails;
