import Link from "next/link";

const Navbar = () => {
	return (
		<header className="backdrop-blur sticky top-0 z-10 border-b border-primary-border">
			<nav className="container py-6 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					Bloggify
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;
