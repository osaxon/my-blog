import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Parallax, Background } from "react-parallax";

function HeroImage() {
	const cld = new Cloudinary({
		cloud: {
			cloudName: "djaiep6vj",
		},
	});

	const myImage = cld.image("images/vietnam");
	const imgUrl = `https://res.cloudinary.com/djaiep6vj/Images/vietnam.jpg`;

	return (
		<Parallax bgImage={imgUrl} strength={-100}>
			<div class="md:h-80 h-20"></div>
		</Parallax>
	);
}

export default HeroImage;
