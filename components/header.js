import Link from "next/link";

export default function Header() {
	return (
		<h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 dark:text-slate-50 text-slate-900">
			<Link href="/">
				<a className="hover:underline">Web Jenga</a>
			</Link>
			.
		</h2>
	);
}
