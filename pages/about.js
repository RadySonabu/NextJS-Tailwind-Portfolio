import React from "react";
import Navbar from "../components/Navbar";

function about() {
	return (
		<div className="bg-white h-screen">
			<Navbar textColor="text-black" hoverColor="text-blue-700" />
			<div className=" text-9xl text-center">
				<h2>
					<b>I am Ardy Narvaez Ubanos</b>
				</h2>
			</div>
			<div className="text-4xl text-center">
				<h5>I have a degree in Food and Computer Science</h5>
			</div>
		</div>
	);
}

export default about;
