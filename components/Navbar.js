/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLinks from "./NavLinks";
import NavTitle from "./NavTitle";
import Image from "next/image";

export default function Navbar({ textColor, hoverColor }) {
	return (
		<Disclosure as="nav" className="bg-transparent">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">
										Open main menu
									</span>
									{open ? (
										<XIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<MenuIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
								<div className="flex-shrink-0 flex items-center">
									<NavTitle
										name="ARDYUBANOS"
										redirect="/"
										textColor={textColor}
										hoverColor={hoverColor}
									/>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
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
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
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
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
