import React from "react";

function NavTitle({ name, redirect, textColor, hoverColor }) {
	return (
		<div>
			<a
				href={redirect}
				className={`text-1xl  block md:inline-block ${textColor} hover:${hoverColor}  px-3 py-3 border-b-2 border-blue-900 md:border-none`}
			>
				<h1>
					<b>{name}</b>
				</h1>
			</a>
		</div>
	);
}

export default NavTitle;
