import Head from "next/head";
import Navbar from "../components/Navbar";
export default function index() {
	return (
		<div className="bg-yellow-400 h-screen">
			<Navbar textColor="text-black" hoverColor="text-white" />
			<div className="prose text-9xl text-center">
				<h2>I am a software engineer.</h2>
			</div>
		</div>
	);
}
