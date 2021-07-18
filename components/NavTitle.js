import React from "react";

function NavTitle({ name, redirect }) {
	return (
		<div>
			<a
				href={redirect}
				class="prose  block md:inline-block text-black hover:text-white px-3 py-3 border-b-2 border-blue-900 md:border-none "
			>
				<h1>{name}</h1>
			</a>
		</div>
	);
}

export default NavTitle;
