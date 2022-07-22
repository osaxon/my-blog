import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "../components/header";
import Container from "./container";

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />

			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
