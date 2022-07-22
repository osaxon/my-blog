import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
	return (
		<Head>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/favicon/safari-pinned-tab.svg"
				color="#000000"
			/>
			<link rel="shortcut icon" href="/favicon/favicon.ico" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta
				name="msapplication-config"
				content="/favicon/browserconfig.xml"
			/>
			<meta name="theme-color" content="#000" />
			<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
			<meta
				name="description"
				content="A blog travel created by Oli Saxon and Giovanna De Sortis"
			/>

			<meta property="og:url" content="http://www.webjenga.com/" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="OG Travels" />
			<meta
				property="og:description"
				content="A blog travel created by Oli Saxon and Giovanna De Sortis"
			/>
			<meta
				property="og:image"
				content="https://images.ctfassets.net/kymlebscek55/4YHyh2OTdn7kAVG8b0s4IF/491c717b21ea0f39b7dd12c68a7d3db1/Frame_1OGIMG.png"
			/>

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="webjenga.com" />
			<meta property="twitter:url" content="http://www.webjenga.com/" />
			<meta name="twitter:title" content="OG Travels" />
			<meta
				name="twitter:description"
				content="A blog travel created by Oli Saxon and Giovanna De Sortis"
			/>
			<meta
				name="twitter:image"
				content="https://images.ctfassets.net/kymlebscek55/4YHyh2OTdn7kAVG8b0s4IF/491c717b21ea0f39b7dd12c68a7d3db1/Frame_1OGIMG.png"
			/>
		</Head>
	);
}
