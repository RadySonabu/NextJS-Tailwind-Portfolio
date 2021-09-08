import React from "react";
import Card from "../../../components/Card";
import Navbar from "../../../components/Navbar";

function backend() {
	return (
		<div className="bg-black h-screen">
			<Navbar textColor="text-white" hoverColor="text-yellow-400" />
			<div>Backend</div>
		</div>
	);
}

export default backend;
