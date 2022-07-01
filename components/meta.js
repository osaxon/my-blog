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
				content={`A blog created by Oli Saxon using Next.JS and ${CMS_NAME}`}
			/>
			<meta property="og:image" content={HOME_OG_IMAGE_URL} />
			<meta property="og:title" content="Web Jenga" />
			<meta property="og:url" content="https://webjenga.com" />
			<meta
				property="og:image"
				content="https://images.ctfassets.net/kymlebscek55/1Xco8bY9RPxCEYHA8thDNN/b715c44569b0f26401460bd775cf516b/E6841_092_1.png?w=3840&q=75"
			/>
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
		</Head>
	);
}
