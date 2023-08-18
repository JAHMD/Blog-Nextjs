import Link from "next/link";
import React from "react";

const NotFound = () => {
	return (
		<main className="grid place-content-center min-h-[calc(100vh-80.8px)] text-center text-white/70">
			<section className="flex flex-col gap-2">
				<h2 className="text-2xl sm:text-4xl font-bold text-white">Not Found</h2>
				<p>Could not find requested resource</p>
				<Link
					href="/"
					className="underline text-sm hover:text-white transition-colors"
				>
					← Back to home
				</Link>
			</section>
		</main>
	);
};

export default NotFound;
