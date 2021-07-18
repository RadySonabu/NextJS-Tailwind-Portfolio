import React from "react";
import NavLinks from "./NavLinks";
import NavTitle from "./NavTitle";

function Navbar({ textColor, hoverColor }) {
	return (
		<nav class="flex flex-wrap items-center justify-between p-5 lg:mx-96 md:mx-auto xs:mx-8 bg-transparent ">
			<NavTitle name="ARDYUBANOS" redirect="/" />
			<div class="flex md:hidden">
				<button id="hamburger">
					<img
						class="toggle block"
						src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
						width="40"
						height="40"
					/>
					<img
						class="toggle hidden"
						src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
						width="40"
						height="40"
					/>
				</button>
			</div>
			<div class="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none ">
				<NavLinks
					name="About Me"
					redirect="/about"
					textColor={textColor}
					hoverColor={hoverColor}
				/>
				<NavLinks
					name="Projects"
					redirect="#"
					textColor={textColor}
					hoverColor={hoverColor}
				/>
				<NavLinks
					name="Contact"
					redirect="#"
					textColor={textColor}
					hoverColor={hoverColor}
				/>
			</div>
		</nav>
	);
}

export default Navbar;
