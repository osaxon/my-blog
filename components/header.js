import Link from "next/link";
import Container from "./container";
import Intro from "./intro";
import DarkModeToggle from "./dark-mode-toggle";
import Nav from "./nav";

export default function Header() {
	return (
		<header className="bg-wavy-pattern">
			<Container>
				<div className="flex justify-between py-12">
					<Intro />
					<DarkModeToggle theme="light" />
				</div>
			</Container>
		</header>
	);
}
