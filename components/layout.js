import Footer from "../components/footer";
import Meta from "../components/meta";
import DarkModeToggle from "./dark-mode-toggle";
import Container from "./container";

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />

			<Container>
				<div className="flex z-50 sticky top-0 justify-end">
					<DarkModeToggle />
				</div>
				<div className="min-h-screen">
					<main>{children}</main>
				</div>
			</Container>
			<Footer />
		</>
	);
}
