/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*'],
	theme: {
		extend: {
			backgroundImage: {
				watch: "url('/watch.webp')",
				'watch-0.3': "url('/watch-0.3.webp')"
			},
			fontFamily: {
				default: ['Space Mono', 'system-ui', 'sans-serif']
			},
			screens: {
				smc: '30rem',
				sm: '40rem',
				md: '48rem',
				mdc: '56rem',
				lg: '64rem',
				xl: '80rem',
				'2xl': '90rem'
			},
			colors: {
				'custom-100': '#BAC0D1',
				'custom-200': '#9AA0B0',
				'custom-400': '#646B7C',
				'custom-500': '#535762',
				'custom-600': '#25272E',
				'custom-700': '#1D1F22',
				'custom-800': '#141517',
				'custom-900': '#111214',
				'custom-blue': '#275988',
				'custom-red': '#922646'
			}
		}
	},
	plugins: []
};
