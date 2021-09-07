import React from "react";
import Image from "next/image";
import Link from "next/link";
function Card({ title, content, redirect }) {
	return (
		<div className="max-w-md py-4 pt-10 px-8 bg-white shadow-lg rounded-lg my-10">
			<div>
				<h2 className="text-gray-800 text-3xl font-semibold">
					{title}
				</h2>
				<p className="mt-2 text-gray-600">{content}</p>
			</div>
			<div className="flex justify-end mt-4">
				<Link
					href={`${redirect}`}
					className="text-xl font-medium text-indigo-500"
				>
					View
				</Link>
			</div>
		</div>
	);
}

export default Card;
