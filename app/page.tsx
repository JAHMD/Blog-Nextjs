import ProfilePic from "@/components/ProfilePic";

export default async function Home() {
	return (
		<main className="container">
			<ProfilePic />
			<section className="flex flex-col my-12 gap-8 text-lg sm:text-2xl mx-auto max-w-2xl text-white/80 text-center">
				<h2 className="text-2xl sm:text-6xl mb-6 font-bold text-white">
					Welcome to Bloggify!
				</h2>
				<p className="leading-10">
					Be passionate about sharing your knowledge and experiences in the
					world of web development, React, and Next.js and any other technology.
				</p>
				<p className="leading-10">
					We believe in the power of technology to transform lives and bring
					innovative ideas to life. Through this blog, together we can aim to
					provide insightful and helpful content to help us on our coding
					journey.
				</p>
				<p className="leading-10">
					Don&#39;t hesitate to share your knowledge with others. Let&#39;s
					learn and grow together!
				</p>
			</section>
		</main>
	);
}
