const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./renderer/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./renderer/pages/**/*.{js,ts,jsx,tsx}',
		'./renderer/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['Inconsolata', 'sans-serif'],
		},
		colors: {
			// use colors only specified
			white: colors.white,
			gray: colors.gray,
			blue: colors.blue,
			oap: {
				50: '#f5f5f1',
				100: '#e7e6da',
				200: '#d1cfb7',
				300: '#b6b08e',
				400: '#a0976f',
				500: '#918761',
				600: '#7c7052',
				700: '#655843',
				800: '#564b3d',
				900: '#3b332b',
				950: '#2a231e',
				1000: '#242220',
			},
		},
		extend: {},
	},
	plugins: [],
}
