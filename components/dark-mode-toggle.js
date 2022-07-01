import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { useLoaded } from "../hooks/useLoaded";
import Emoji from "a11y-react-emoji";

const DarkModeToggle = () => {
	const loaded = useLoaded();
	const [colorTheme, setTheme] = useDarkMode();

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
					className="text-slate-900 flex tracking-tighter text-3xl"
					onClick={() => setTheme("dark")}
				>
					<Emoji symbol="🌚" label="dark" />
				</button>
			)}
		</>
	);
};

export default DarkModeToggle;
