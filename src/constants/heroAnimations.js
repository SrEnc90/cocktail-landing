// Hero animations configuration
export const HERO_TEXT_ANIMATION = {
	chars: {
		yPercent: 100,
		duration: 1.5,
		ease: 'power2.out',
		stagger: 0.1,
	},
	lines: {
		opacity: 0,
		yPercent: 100,
		duration: 1.8,
		ease: 'power2.out',
		stagger: 0.1,
		delay: 0.5,
	},
};

export const LEAVES_SCROLL_ANIMATION = {
	trigger: '#hero',
	start: 'top top',
	end: 'bottom top',
	scrub: true,
};

export const LEAVES_MOVEMENT = {
	rightLeaf: { y: 200 },
	leftLeaf: { y: -300 },
};

export const VIDEO_SCROLL_ANIMATION = {
	desktop: {
		start: 'center 60%',
		end: 'bottom top',
	},
	mobile: {
		start: 'top 50%',
		end: '120% top',
	},
};
