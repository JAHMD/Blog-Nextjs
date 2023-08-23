import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blog | Home",
	description: "This is a blog website that contains published articles.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-h-screen`}>
				<Navbar />
				<main className="container py-10 prose prose-xl prose-invert">
					{children}
				</main>
			</body>
		</html>
	);
}
