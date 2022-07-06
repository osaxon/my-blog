import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";

export default function Index({ preview, allPosts }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	// const pinnedPost = allPosts.filter((post) => {
	// 	return post.pinned === true;
	// });
	// const heroPost = pinnedPost[0];
	// const morePosts = allPosts.filter((post) => {
	// 	return post.pinned === false;
	// });

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Web Jenga</title>
				</Head>

				<Intro />
				{heroPost && (
					<HeroPost
						title={heroPost.title}
						coverImage={heroPost.coverImage}
						date={heroPost.date}
						author={heroPost.author}
						slug={heroPost.slug}
						excerpt={heroPost.excerpt}
					/>
				)}
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = (await getAllPostsForHome(preview)) ?? [];
	return {
		props: { preview, allPosts },
	};
}
