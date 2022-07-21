import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossorigin
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="dark:bg-slate-900 bg-slate-50">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
