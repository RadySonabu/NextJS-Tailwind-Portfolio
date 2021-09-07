import React from "react";
import Image from "next/image";
function SimpleCard({ cardTitle, cardText, imageUrl, externalUrl }) {
	const externalRedirect = () => {
		window.open(externalUrl);
	};
	return (
		<div onClick={externalRedirect}>
			<div className="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-4 bg-white transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
				<a href="#" className="w-full block h-full">
					<Image
						alt="resume photo"
						src={`${imageUrl}`}
						className="max-h-50 w-full object-fill"
						height="175"
						width="300"
					/>

					<div className="w-full">
						<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
							{cardTitle}
						</p>
						<p className="text-gray-600 dark:text-gray-300 font-semibold text-md">
							{cardText}
						</p>
					</div>
				</a>
			</div>
		</div>
	);
}

export default SimpleCard;
