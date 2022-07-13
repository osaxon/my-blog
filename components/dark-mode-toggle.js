import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { useLoaded } from "../hooks/useLoaded";
import Emoji from "a11y-react-emoji";

const DarkModeToggle = ({ theme }) => {
	console.log(theme);
	const loaded = useLoaded();
	const [colorTheme, setTheme] = useDarkMode(theme);

	return (
		<>
			{loaded && colorTheme === "light" ? (
				<button
					className=" text-slate-50 tracking-tighter text-3xl"
					onClick={() => setTheme("light")}
				>
					<Emoji symbol="🌝" label="light" />
				</button>
			) : (
				<button
					className="text-slate-900 tracking-tighter text-3xl"
					onClick={() => setTheme("dark")}
				>
					<Emoji symbol="🌚" label="dark" />
				</button>
			)}
		</>
	);
};

export default DarkModeToggle;
