import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPostsForHome, getAllTopics } from "../lib/api";
import Head from "next/head";
import Nav from "../components/nav";
import Container from "../components/container";
import HeroImage from "../components/hero-image";
import { Parallax } from "react-parallax";
import Header from "../components/header";

export default function Index({ preview, allPosts, allTopics }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>OG Travels</title>
				</Head>

				<Container>
					<Header topics={allTopics} />
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
