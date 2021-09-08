import React from "react";
import Navbar from "../components/Navbar";

function about() {
	return (
		<div className="bg-white h-screen">
			<Navbar textColor="text-black" hoverColor="text-blue-700" />
			<div className=" text-9xl text-center md:prose md:text-9xl">
				<h2>
					<b>I am Ardy Narvaez Ubanos</b>
				</h2>
			</div>
			<div className="text-4xl text-center">
				<h5>I have a degree in Food and Computer Science</h5>
			</div>
			<div className="prose text-6xl text-center">
				<h4>
					I'm interested in basketball, coding, AI/ML, Data Science,
					Gaming, Movie Marathon
				</h4>
			</div>
		</div>
	);
}

export default about;
