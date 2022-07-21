import { CMS_NAME, CMS_URL } from "../lib/constants";
import Link from "next/link";

export default function Intro() {
	return (
		<h1 className="text-7xl font-custom md:text-8xl text-[#0C392E] leading-tight dark:text-slate-50 ">
			<Link href="/">OG TRAVELS</Link>
		</h1>
	);
}
