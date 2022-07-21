import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import Image from "next/image";

function HeroImage() {
	const cld = new Cloudinary({
		cloud: {
			cloudName: "djaiep6vj",
		},
	});

	const myImage = cld.image("images/cornwall_beach");

	return (
		<div className="">
			<AdvancedImage cldImg={myImage} />
		</div>
	);
}

export default HeroImage;
