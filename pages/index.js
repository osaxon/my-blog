import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getAllTopicsForHome } from "../lib/api";
import { useState } from "react";
import Head from "next/head";
import TopicContainer from "../components/topic-container";

export default function Index({ preview, allPosts }) {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Web Jenga</title>
				</Head>

				<Intro />
				<TopicContainer
					topics={[{ name: "money", url: "/posts/topic/money" }]}
				/>

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
					<MoreStories title="More Stories" posts={morePosts} />
				)}
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = (await getAllPostsForHome(preview)) ?? [];

	return {
		props: { preview, allPosts },
		revalidate: 1,
	};
}
