import { NAVBAR_ITEMS } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Navbar = () => {
	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: 'nav',
				start: 'bottom top',
			},
		});

		navTween.fromTo(
			'nav',
			{ backgroundColor: 'transparent' },
			{
				backdropFilter: 'blur(10px)',
				duration: 1,
				ease: 'power2.out',
			},
		);
	}, []);

	return (
		<nav>
			<div>
				<a href="#home" className="flex items-center gap-2">
					<img src="/images/logo.png" alt="logo" />
					<p>Velvet Pour</p>
				</a>
				<ul>
					{NAVBAR_ITEMS.map(({ id, title }) => (
						<li key={id}>
							<a href={`#${id}`}>{title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
