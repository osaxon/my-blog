import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import useSWR from "swr";

async function fetcherFunc(url) {
	const res = await fetch(url);
	return res.json();
}

export default function Post({ post, morePosts, preview }) {
	const url = "/api/posts";
	const { data, error } = useSWR(url, fetcherFunc);

	const router = useRouter();

	if (!router.isFallback && !post) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Layout preview={preview}>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article className="">
							<Head>
								<title>{post.title}</title>
								<meta
									property="og:image"
									content={post.coverImage.url}
								/>
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
							/>
							<PostBody content={post.content} />
						</article>
						<SectionSeparator />
						{morePosts && morePosts.length > 0 && (
							<MoreStories posts={morePosts} />
						)}
					</>
				)}
			</Container>
		</Layout>
	);
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getPostAndMorePosts(params.slug, preview);

	return {
		props: {
			preview,
			post: data?.post ?? null,
			morePosts: data?.morePosts ?? null,
		},
		revalidate: 5,
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug();
	return {
		paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
		fallback: true,
	};
}
