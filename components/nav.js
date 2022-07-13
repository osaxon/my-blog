import Topic from "./topic";
import Link from "next/link";

export default function Nav({ topics }) {
	console.log(topics);
	return (
		<>
			<nav className="flex gap-2">
				<h2 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 dark:text-slate-50 text-slate-900">
					<Link href="/posts/about">
						<a className="hover:underline">About</a>
					</Link>
					.
				</h2>
				{topics &&
					topics.map((topic) => (
						<Topic
							key={topic.slug}
							name={topic.slug}
							url={`/posts/topic/${topic.slug}`}
						/>
					))}
			</nav>
		</>
	);
}
