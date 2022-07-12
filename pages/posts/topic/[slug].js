import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../../components/layout";
import HeroPost from "../../../components/hero-post";
import MoreStories from "../../../components/more-stories";

import {
	getAllPostsWithSlug,
	getAllPostsWithTopics,
	getAllTopics,
} from "../../../lib/api";

export default function Topics({ preview, allPosts }) {
	console.log(allPosts);
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Web Jenga</title>
				</Head>
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

export async function getStaticProps({ params }) {
	const allPosts = (await getAllPostsWithTopics(params.slug)) ?? [];
	console.log(allPosts);
	return {
		props: { allPosts },
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const allTopics = await getAllTopics();

	return {
		paths: allTopics?.map(({ slug }) => `/posts/topic/${slug}`) ?? [],
		fallback: "blocking",
	};
}
