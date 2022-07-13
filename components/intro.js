import { CMS_NAME, CMS_URL } from "../lib/constants";
import Link from "next/link";

export default function Intro() {
	return (
		<h1 className="text-6xl font-bold md:text-8xl tracking-tighter leading-tight md:pr-8 dark:text-slate-50 text-slate-900">
			<Link href="/">OG Travels</Link>
		</h1>
	);
}
