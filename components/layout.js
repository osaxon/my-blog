import Footer from "../components/footer";
import Meta from "../components/meta";
import DarkModeToggle from "./dark-mode-toggle";
import Container from "./container";
import Header from "../components/header";

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<Header />
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
