export default async function handler(req, res) {
	// only allow POST request
	if (req.method !== "POST") {
		return res.status(400).json({
			error: "Invalid HTTP method. Only POST allowed.",
		});
	}

	// check for secret token
	if (req.query.secret !== "DairyMilk99") {
		return res.status(401).json({ message: "Invalid token." });
	}

	try {
		// check body is not empty
		const body = req.body;
		if (!body) {
			return res.status(400).send("Bad request (no body");
		}

		// get slug to revalidate
		const slugToRevalidate = body.slugToRevalidate;
		if (slugToRevalidate) {
			await res.revalidate("/");
			await res.revalidate(`/posts/${slugToRevalidate}`);
			return res.json({
				revalidated: true,
				slugRevalidated: slugToRevalidate,
			});
		}
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		console.log(err);
		return res.status(500).send("Error revalidating");
	}
}
