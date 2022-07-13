import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
	return (
		<section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
			<h1 className=" text-6xl font-bold md:text-8xl tracking-tighter leading-tight md:pr-8 dark:text-slate-50 text-slate-900">
				OG <span className="text-lime-600">Travels.</span>
			</h1>
		</section>
	);
}
