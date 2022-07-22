import Topic from "./topic";
import Link from "next/link";
import Container from "./container";

export default function Nav({ topics }) {
	return (
		<nav className="flex md:flex-row flex-col gap-x-1 flex-wrap justify-between mt-4">
			<h2 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight md:mb-10 m dark:text-slate-50 text-slate-900">
				<Link href="/posts/about">
					<a className="hover:underline">About. us</a>
				</Link>
				<span>...</span>
			</h2>
			<div className="flex flex-wrap gap-x-4 ">
				{topics &&
					topics.map((topic) => (
						<Topic
							key={topic.slug}
							name={topic.slug}
							url={`/posts/topic/${topic.slug}`}
						/>
					))}
			</div>
		</nav>
	);
}
