export default function PostTitle({ children }) {
	return (
		<h1 className="text-6xl md:text-7xl lg:text-8xl font-custom tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left text-slate-900 dark:text-slate-50">
			{children}
		</h1>
	);
}
