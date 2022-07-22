import Link from "next/link";
import Container from "./container";
import Title from "./title";
import DarkModeToggle from "./dark-mode-toggle";
import Nav from "./nav";
import IntroText from "./intro-text";

export default function Header(props) {
	console.log(props.topics);
	return (
		<header className="flex flex-col">
			<div className="flex justify-between flex-col md:flex-row">
				<Title />
				<IntroText />
			</div>
			<Nav topics={props.topics} />
		</header>
	);
}
