import Head from "next/head";
import React from "react";
import Layout from "../../components/layout";
import {
	getAllPostsForHome,
	getAllPostsWithTopics,
	getAllTopicsForHome,
} from "../../lib/api";
import { useState, useEffect } from "react";

export default function Posts({ preview, allPosts }) {
	const [posts, setPosts] = useState(allPosts);
	const [topic, setTopic] = useState("guides");

	console.log(posts);

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Posts</title>
				</Head>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = (await getAllPostsForHome(preview)) ?? [];
	console.log(allPosts);
	return {
		props: { preview, allPosts },
		revalidate: 1,
	};
}
