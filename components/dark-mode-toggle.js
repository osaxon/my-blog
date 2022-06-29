import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { useLoaded } from "../hooks/useLoaded";
import SvgBulb from "./svg-bulb";
import SvgMoon from "./svg-moon";

const DarkModeToggle = () => {
	const loaded = useLoaded();
	const [colorTheme, setTheme] = useDarkMode();

	return (
		<button className="rounded-lg h-12 w-12">
			{loaded && colorTheme === "light" ? (
				<button
					className="text-slate-50 tracking-tighter"
					onClick={() => setTheme("light")}
				>
					LIGHT
				</button>
			) : (
				<button
					className="text-slate-900 tracking-tighter"
					onClick={() => setTheme("dark")}
				>
					DARK
				</button>
			)}
		</button>
	);
};

export default DarkModeToggle;
