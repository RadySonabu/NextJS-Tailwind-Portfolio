import React from "react";
import SimpleCard from "../../components/SimpleCard";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

function projects() {
	return (
		<div className="bg-black h-screen">
			<Navbar textColor="text-white" hoverColor="text-yellow-400" />
			<div className="grid grid-row-auto grid-flow-row  gap-1 justify-center  mt-5  md:grid-cols-auto md:grid-flow-col md:gap-4  md:mx-96 md:my-2">
				{/* <Card
					title="Backend Projects"
					content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quae dolores deserunt ea doloremque natus error, rerum quas
					odio quaerat nam ex commodi hic, suscipit in a veritatis
					pariatur minus consequuntur!"
					redirect="/projects/backend"
				/>
				<Card
					title="Frontend Projects"
					content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quae dolores deserunt ea doloremque natus error, rerum quas
					odio quaerat nam ex commodi hic, suscipit in a veritatis
					pariatur minus consequuntur!"
					redirect="/projects/frontend"
				/> */}
				<div className="flex justify-center align-middle text-white">
					Still making the UI for this part. Standby. If you have
					questions, you can click the contact link.
				</div>
			</div>
		</div>
	);
}

export default projects;
