import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function projects() {
	return (
		<div className="bg-black h-screen">
			<Navbar textColor="text-white" hoverColor="text-yellow-400" />
			<div className="px-96">
				<div className="grid grid-col-2 grid-flow-col ">
					<Card
						title="Backend Projects"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quae dolores deserunt ea doloremque natus error, rerum quas
					odio quaerat nam ex commodi hic, suscipit in a veritatis
					pariatur minus consequuntur!"
					/>
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

export default projects;
