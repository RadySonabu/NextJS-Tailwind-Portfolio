import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
export default function index() {
	return (
		<div class="bg-yellow-400 h-screen">
			<Navbar textColor="text-black" hoverColor="text-white" />
			<div class="prose text-9xl text-center">
				<h2>I am a software engineer.</h2>
			</div>
		</div>
	);
}
