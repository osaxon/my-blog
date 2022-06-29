import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="dark:bg-slate-900 bg-slate-50">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
