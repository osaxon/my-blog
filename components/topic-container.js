import Topic from "./topic";

export default function TopicContainer({ topics }) {
	console.log(topics);
	return (
		<>
			<div className="flex">
				{topics &&
					topics.map((topic) => (
						<Topic
							key={topic.name}
							name={topic.name}
							url={topic.url}
						/>
					))}
			</div>
		</>
	);
}
