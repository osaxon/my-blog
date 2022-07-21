import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getAllTopics } from "../lib/api";
import Head from "next/head";
import Nav from "../components/nav";
import Container from "../components/container";
import HeroImage from "../components/hero-image";

export default function Index({ preview, allPosts, allTopics }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	console.log(allTopics);

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Web Jenga</title>
				</Head>
				<Nav topics={allTopics} />

				<Container>
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
					{morePosts.length > 0 && (
						<MoreStories title="More Posts" posts={morePosts} />
					)}
				</Container>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = (await getAllPostsForHome(preview)) ?? [];
	const allTopics = (await getAllTopics()) ?? [];

	return {
		props: { preview, allPosts, allTopics },
		revalidate: 1,
	};
}
