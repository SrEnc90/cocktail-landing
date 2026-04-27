import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
	const videoRef = useRef(null);
	const isMobile = useMediaQuery({ maxWidth: 768 });
	useGSAP(() => {
		const heroSplit = SplitText.create('.title', {
			type: 'chars, words',
		});
		const paragraphSplit = SplitText.create('.subtitle', {
			type: 'lines',
		});
		heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.5,
			ease: 'power2.out',
			stagger: 0.1,
		});
		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: 'power2.out',
			stagger: 0.1,
			delay: 0.5,
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '#hero',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
			},
		})
			.to('.right-leaf', { y: 200 }, 0)
			.to('.left-leaf', { y: -300 }, 0);

		const startValue = isMobile ? 'top 50%' : 'center 60%';
		const endValue = isMobile ? '120% top' : 'bottom top';

		gsap.timeline({
			scrollTrigger: {
				trigger: '#hero',
				start: startValue,
				end: endValue,
				scrub: true,
			},
		});
	}, []);

	return (
		<>
			<section id="hero">
				<div className="noisy">
					<h1 className="title">MOJITO</h1>
					<img
						src="/images/hero-left-leaf.png"
						alt="left-leaf"
						className="left-leaf"
					/>
					<img
						src="/images/hero-right-leaf.png"
						alt="right-leaf"
						className="right-leaf"
					/>

					<div className="body">
						<div className="content">
							<div className="space-y-5 hidden md:block">
								<p>Cool. Crisp Classic.</p>
								<p className="subtitle">
									Sip the Spirit <br /> of Summer
								</p>
							</div>

							<div className="view-cocktails">
								<p className="subtitle">
									Every cocktail on our menu is a blend of
									premium ingredients, creative flair, and
									timeless recipes - desined to delight your
									senses.
								</p>
								<a href="#cocktails">View Cocktails</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="video absolute inset-0">
				<video
					src="/videos/input.mp4"
					muted
					playsInline
					preload="auto"
					ref={videoRef}
				/>
			</div>
		</>
	);
};

export default Hero;
