import Navbar from "../components/Navbar";
import SimpleCard from "../components/SimpleCard";
import Head from "next/head";
export default function index() {
	return (
		<div className="bg-yellow-400 h-full md:h-screen">
			<Head>
				<title>Ardy Ubanos</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="Ardy Ubanos website and electronic profile"
				/>
			</Head>
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
					externalUrl="https://django-ardy.s3.ap-northeast-1.amazonaws.com/Ardy-Ubanos-Resume-2.pdf"
				/>
				<SimpleCard
					cardTitle="Github Repository"
					cardText="This is my Github Repository. Feel free to view it."
					imageUrl="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png"
					externalUrl="https://github.com/RadySonabu"
				/>
				<SimpleCard
					cardTitle="LinkedIn Profile"
					cardText="This is my LinkedIn Profile. Feel free to view it."
					imageUrl="https://denverdata.com/sites/default/files/linkedin-branding-CONTENT-2019.jpg"
					externalUrl="https://www.linkedin.com/in/ardy-ubanos/"
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
