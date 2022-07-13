import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
	return (
		<footer className="bg-slate-900 dark:bg-slate-50 bg-wavy-pattern">
			<Container>
				<div className="py-12 flex flex-col lg:flex-row items-center">
					<h3 className="text-4xl text-slate-50 dark:text-slate-900 lg:text-5xl font-serif italic font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
						Get in touch
					</h3>
					<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
						<a
							href={`https://github.com/osaxon`}
							className="mx-3 font-bold font-mono hover:underline"
						>
							View my GitHub
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}
