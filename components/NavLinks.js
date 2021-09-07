import React from "react";
import Link from "next/link";
function NavLinks({ name, redirect, textColor, hoverColor }) {
	return (
		<div>
			<a
				href={redirect}
				className={` block md:hover:cursor-pointer hover:${hoverColor} md:inline-block ${textColor}   px-3 py-3 border-b-2 border-blue-900 md:border-none   `}
			>
				<h4>
					<b>{name}</b>
				</h4>
			</a>
		</div>
	);
}

export default NavLinks;
