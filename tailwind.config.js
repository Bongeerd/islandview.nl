const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Quattrocento Sans"', ...defaultTheme.fontFamily.sans],
				'serif': ['"Quattrocento"', ...defaultTheme.fontFamily.serif],
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
