import Link from "next/link";

export default function Topic({ name, url }) {
	return (
		<h2 className="text-xl italic md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight md:mb-10 mb-4 dark:text-slate-50 text-slate-900">
			<Link href={url}>
				<a className="hover:underline">{name}</a>
			</Link>
			.
		</h2>
	);
}
