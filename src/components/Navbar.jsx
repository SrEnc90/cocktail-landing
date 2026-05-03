import { NAVBAR_ITEMS } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Navbar = () => {
	useGSAP(() => {
		// const navTween = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: 'nav',
		// 		start: 'bottom top',
		// 		toggleActions: 'play none play reset',
		// 	},
		// });

		// navTween.fromTo(
		// 	'nav',
		// 	{ backdropFilter: 'blur(0px)' },
		// 	{
		// 		backdropFilter: 'blur(10px)',
		// 		duration: 0.5,
		// 		ease: 'power2.out',
		// 	},
		// );
		gsap.set('nav', { backdropFilter: 'blur(0px)' });

		gsap.to('nav', {
			backdropFilter: 'blur(10px)',
			duration: 0.3,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: 'nav',
				start: 'bottom top',
				toggleActions: 'play none none reset',
			},
		});
	}, []);

	return (
		<nav className="bg-transparent">
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
