import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Layout from "../../../components/layout";
import HeroPost from "../../../components/hero-post";
import MoreStories from "../../../components/more-stories";
import Intro from "../../../components/intro";
import Header from "../../../components/header";
import Container from "../../../components/container";

import {
	getAllPostsWithSlug,
	getAllPostsWithTopics,
	getAllTopics,
} from "../../../lib/api";

export default function Topics({ preview, allPosts }) {
	const router = useRouter();
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	const topic = router.query.slug;

	if (!router.isFallback && !allPosts) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<>
			<Layout preview={preview}>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						{allPosts && allPosts.length > 0 && (
							<MoreStories title={topic} posts={allPosts} />
						)}
					</>
				)}
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
