import ContentfulImage from "./contentful-image";

export default function Avatar({ name, picture }) {
	return (
		<div className="flex items-center">
			<div className="relative w-12 h-12 mr-4">
				<ContentfulImage
					src={picture.url}
					layout="fill"
					className="rounded-full"
					alt={name}
				/>
			</div>
			<div className="text-xl font-bold text-slate-900 dark:text-slate-50">
				{name}
			</div>
		</div>
	);
}
