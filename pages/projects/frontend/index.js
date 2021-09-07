import React from "react";
import Navbar from "../../../components/Navbar";
import SimpleCard from "../../../components/SimpleCard";

function frontend() {
	return (
		<div className="bg-black h-screen">
			<Navbar textColor="text-white" hoverColor="text-yellow-400" />
			<div className="px-96">
				<div className="grid grid-col-2 grid-flow-col ">
					<SimpleCard />
				</div>
			</div>
		</div>
	);
}

export default frontend;
