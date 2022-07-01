module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	mode: "jit",
	darkMode: "class",
	theme: {
		fill: (theme) => ({
			red: theme("colors.cerise.500"),
			green: theme("colors.green.400"),
			blue: theme("colors.blue.500"),
			white: theme("colors.white"),
			dark: theme("colors.indigo.400"),
			yellow: theme("colors.lemon.400"),
			leaf: theme("colors.leaf.500"),
		}),
		stroke: (theme) => ({
			red: theme("colors.cerise.500"),
			green: theme("colors.green.500"),
			blue: theme("colors.blue.500"),
			black: theme("colors.black"),
			yellow: theme("colors.lemon.300"),
			leaf: theme("colors.leaf.500"),
		}),
		extend: {
			scale: {
				"-1": "-1",
			},
			colors: {
				"accent-1": "#FAFAFA",
				"accent-2": "#EAEAEA",
				"accent-7": "#333",
				success: "#0070f3",
				cyan: "#79FFE1",
			},
			spacing: {
				28: "7rem",
			},
			letterSpacing: {
				tighter: "-.04em",
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				"5xl": "2.5rem",
				"6xl": "2.75rem",
				"7xl": "4.5rem",
				"8xl": "6.25rem",
			},
			fontFamily: {
				myfont: ["MyFont"],
				sams: ["MyFont", "sans-serif"],
			},
			boxShadow: {
				small: "0 5px 10px rgba(0, 0, 0, 0.12)",
				medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
			},
		},
	},
	plugins: [],
};
