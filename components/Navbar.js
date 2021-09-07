import React from "react";
import NavLinks from "./NavLinks";
import NavTitle from "./NavTitle";
import Image from "next/image";

function Navbar({ textColor, hoverColor }) {
	return (
		<nav className="flex flex-wrap items-center justify-between p-5 lg:mx-96 md:mx-auto xs:mx-8 bg-transparent ">
			<NavTitle
				name="ARDYUBANOS"
				redirect="/"
				textColor={textColor}
				hoverColor={hoverColor}
			/>
			<div className="flex md:hidden">
				<button id="hamburger">
					<Image
						className="toggle block"
						alt="toggle block"
						src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
						width="40"
						height="40"
					/>
					<Image
						className="toggle hidden"
						alt="toggle block"
						src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
						width="40"
						height="40"
					/>
				</button>
			</div>
			<div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none space-x-4  ">
				<NavLinks
					name="About Me"
					redirect="/about"
					textColor={textColor}
					hoverColor={hoverColor}
				/>
				<NavLinks
					name="Projects"
					redirect="/projects"
					textColor={textColor}
					hoverColor={hoverColor}
				/>
				<NavLinks
					name="Contact"
					redirect="/contact"
					textColor={textColor}
					hoverColor={hoverColor}
				/>
			</div>
		</nav>
	);
}

export default Navbar;
