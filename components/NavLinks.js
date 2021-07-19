import React from "react";

function NavLinks({ name, redirect, textColor, hoverColor }) {
	return (
		<div>
			<a
				href={redirect}
				className={` block md:inline-block ${textColor} hover:${hoverColor} px-3 py-3 border-b-2 border-blue-900 md:border-none  `}
			>
				<h4>
					<b>{name}</b>
				</h4>
			</a>
		</div>
	);
}

export default NavLinks;
