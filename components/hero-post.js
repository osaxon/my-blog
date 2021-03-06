import Link from "next/link";
import Avatar from "../components/avatar";
import DateComponent from "../components/date";
import CoverImage from "../components/cover-image";

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage title={title} slug={slug} url={coverImage.url} />
			</div>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-4xl lg:text-6xl leading-tight dark:text-slate-50 text-slate-900">
						<Link href={`/posts/${slug}`}>
							<a className="hover:underline font-serif italic dark:text-slate-50 text-slate-900">
								{title}
							</a>
						</Link>
					</h3>
					<div className="mb-4 md:mb-0 font-mono text-lg dark:text-slate-50 text-slate-900">
						<DateComponent dateString={date} />
					</div>
				</div>
				<div>
					<p className="text-lg font-serif leading-relaxed mb-4 dark:text-slate-50 text-slate-900">
						{excerpt}
					</p>
					{author && (
						<Avatar name={author.name} picture={author.picture} />
					)}
				</div>
			</div>
		</section>
	);
}
