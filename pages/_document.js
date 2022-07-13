import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/Rubik-80sFade-Regular.ttf"
						as="font"
						crossOrigin=""
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
