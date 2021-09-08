import React from "react";
import Image from "next/image";
import Link from "next/link";
function Card({ title, content, imageUrl }) {
	return (
		// <div className="max-w-md py-4 pt-10 px-8 bg-white shadow-lg rounded-lg my-10">
		// 	<div>
		// 		<h2 className="text-gray-800 text-3xl font-semibold">
		// 			{title}
		// 		</h2>
		// 		<p className="mt-2 text-gray-600">{content}</p>
		// 	</div>
		// 	<div className="flex justify-end mt-4">

		// 	</div>
		// </div>
		<div className="h- bg-gray-100 grid items-center justify-center">
			<div className="p-6 bg-white flex items-center space-x-6 rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
				<Image
					alt="resume photo"
					src={`${imageUrl}`}
					className="max-h-50 w-full object-cover	"
					height="175"
					width="300"
				/>

				<div className="w-full">
					<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
						{title}
					</p>
					<p className="text-gray-600 dark:text-gray-300 font-semibold text-md">
						{content}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
