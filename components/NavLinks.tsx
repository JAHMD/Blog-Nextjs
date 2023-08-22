"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type LinkType = { name: string; href: string };

const NavLinks = () => {
	const navLinks: LinkType[] = [
		{ name: "Home", href: "/" },
		{ name: "Posts", href: "/posts" },
		{ name: "Create post", href: "/posts/create-post" },
	];

	const pathname = usePathname();

	return (
		<ul className="flex items-center gap-4 text-white/70">
			{navLinks.map((link) => {
				const isActive = link.href === pathname;
				return (
					<li key={link.name}>
						<Link
							href={link.href}
							className={`${
								isActive ? "text-white" : ""
							} hover:text-white transition-colors`}
						>
							{link.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default NavLinks;
