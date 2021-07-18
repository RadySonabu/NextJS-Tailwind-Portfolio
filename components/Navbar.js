import React from "react";

function Navbar() {
	return (
		<nav class="flex flex-wrap items-center justify-between p-5 bg-transparent">
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
			<div class="">ARDYUBANOS</div>
			<div class="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
				<a
					href="#"
					class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
				>
					Home
				</a>
				<a
					href="#"
					class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
				>
					Products
				</a>
				<a
					href="#"
					class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
				>
					Pricing
				</a>
				<a
					href="#"
					class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
				>
					Contact
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
