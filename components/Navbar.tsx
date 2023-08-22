import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
	return (
		<header className="backdrop-blur-lg sticky top-0 z-10 border-b border-primary-border">
			<nav className="container py-6 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					Bloggify
				</Link>
				<NavLinks />
			</nav>
		</header>
	);
};

export default Navbar;
