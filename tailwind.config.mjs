/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'creamy': '#fdf7f2',
			},
			backgroundImage: theme => ({
				'logo-dark': "url('/logo-dark.png')",
				'logo-light': "url('/logo-transparent.png')",
			})
		},
	},
	variants: {
		extend: {
			backgroundImage: ['dark'],
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
}
