import Head from "next/head";
import Navbar from "../components/Navbar";
import SimpleCard from "../components/SimpleCard";
export default function index() {
	return (
		<div className="bg-yellow-400 h-screen">
			<Navbar textColor="text-black" hoverColor="text-white" />
			<div className="font-extrabold text-6xl md:text-8xl text-center">
				<h2>I am a </h2>
				<h2>software engineer.</h2>
			</div>
			<div className="grid grid-row-auto grid-flow-col  md:grid-cols-auto justify-center gap-2 mx-96 my-10">
				<SimpleCard
					cardTitle="Resume"
					cardText="This is my updated resume. Feel free to view it."
				/>
			</div>
		</div>
	);
}
