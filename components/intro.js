import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
	return (
		<section className="flex-col md:flex-row flex md:justify-between mt-4 md:mt-8 mb-10 md:mb-8">
			<h1 className="text-6xl font-bold md:text-8xl tracking-tighter leading-tight md:pr-8 dark:text-slate-50 text-slate-900">
				OG <span className="text-lime-600">Travels.</span>
			</h1>
		</section>
	);
}
