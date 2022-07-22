import { CMS_NAME, CMS_URL } from "../lib/constants";
import Link from "next/link";

export default function Title() {
	return (
		<h1 className="text-6xl text-center font-custom md:text-7xl text-[#0C392E] leading-tight dark:text-slate-50 ">
			<Link href="/">OG TRAVELS</Link>
		</h1>
	);
}
