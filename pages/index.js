import Head from "next/head";
import Navbar from "../components/Navbar";
import SimpleCard from "../components/SimpleCard";
export default function index() {
	return (
		<div className="bg-yellow-400 h-full md:h-screen">
			<Navbar textColor="text-black" hoverColor="text-white" />
			<div className="font-extrabold text-center md:mt-10">
				<div className="text-2xl md:text-6xl">I am a </div>
				<div className="text-2xl md:text-8xl text-white">
					Computer Science
				</div>
				<div className="text-2xl md:text-8xl">student.</div>
			</div>
			<div className="grid grid-row-3 grid-flow-row py-10 gap-8 justify-center  md:grid-cols-auto md:grid-flow-col md:gap-4 md:mt-5  md:mx-96 md:my-2">
				<SimpleCard
					cardTitle="Resume"
					cardText="This is my updated resume. Feel free to view it."
					imageUrl="https://resumegenius.com/wp-content/uploads/2020/05/how-far-back-should-a-resume-go-graphic.png"
				/>
				<SimpleCard
					cardTitle="Github Repository"
					cardText="This is my Github Repository. Feel free to view it."
					imageUrl="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
				/>
				<SimpleCard
					cardTitle="LinkedIn Profile"
					cardText="This is my LinkedIn Profile. Feel free to view it."
					imageUrl="https://denverdata.com/sites/default/files/linkedin-branding-CONTENT-2019.jpg"
				/>
			</div>
			<div className="font-extrabold text-center pb-10 md:mt-10">
				<div className="animate-bounce text-2xl md:text-6xl">
					Click the links@
				</div>
			</div>
		</div>
	);
}
