import React from "react";
import Navbar from "../../../components/Navbar";
import Card from "../../../components/Card";

function frontend() {
	return (
		<div className="bg-black h-screen">
			<Navbar textColor="text-white" hoverColor="text-yellow-400" />
			<div className="px-96">
				<div className="grid grid-col-2 grid-flow-col ">
					<Card
						title="Frontend Projects"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quae dolores deserunt ea doloremque natus error, rerum quas
					odio quaerat nam ex commodi hic, suscipit in a veritatis
					pariatur minus consequuntur!"
					/>
				</div>
			</div>
		</div>
	);
}

export default frontend;
