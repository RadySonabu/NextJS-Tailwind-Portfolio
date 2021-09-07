import React from "react";
import Image from "next/image";
function SimpleCard({ cardTitle, cardText }) {
	const redirectToResume = () => {
		<a
			target="_blank"
			href="https://twitter.com/"
			rel="noopener noreferrer"
		>
			adsf
		</a>;
	};
	return (
		<div onClick={redirectToResume}>
			<div className="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-4 bg-indigo-50 transition duration-500 ease-in-out transform hover:translate-y-5 hover:shadow-2xl">
				<a href="#" className="w-full block h-full">
					<Image
						alt="resume photo"
						src="https://resumegenius.com/wp-content/uploads/2020/05/how-far-back-should-a-resume-go-graphic.png"
						className="max-h-50 w-full object-fill"
						height="200"
						width="300"
					/>

					<div className="w-full">
						<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
							{cardTitle}
						</p>
						<p className="text-gray-600 dark:text-gray-300 font-light text-md">
							{cardText}
						</p>
					</div>
				</a>
			</div>
		</div>
	);
}

export default SimpleCard;
