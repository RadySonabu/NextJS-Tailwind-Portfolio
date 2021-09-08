import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SimpleCard from "../components/SimpleCard";

function contact() {
	return (
		<div className="bg-gradient-to-r from-red-700 via-red-800  to-red-900 h-full md:h-screen">
			<Navbar textColor="text-white" hoverColor="text-yellow-400" />
			<div className="font-extrabold text-center md:mt-10">
				<div className="text-2xl md:text-8xl text-white">Feel free</div>
				<div className="text-2xl md:text-8xl text-white">
					to reach me on these platforms.
				</div>
			</div>
			<div className="grid grid-row-3 grid-flow-row py-10 gap-8 justify-center  md:grid-cols-auto md:grid-flow-col md:gap-4 md:mt-5  md:mx-96 md:my-2">
				<Card
					title="Microsoft Teams"
					content="ardynubanos@gmail.com"
					imageUrl="https://django-ardy.s3.ap-northeast-1.amazonaws.com/teams.jpg"
				/>
				<Card
					title="Gmail"
					content="ardynubanos@gmail.com"
					imageUrl="https://django-ardy.s3.ap-northeast-1.amazonaws.com/gmail.png"
				/>
				<Card
					title="Viber"
					content="+639279107589"
					imageUrl="https://django-ardy.s3.ap-northeast-1.amazonaws.com/viber2.png"
				/>
			</div>
		</div>
	);
}

export default contact;
