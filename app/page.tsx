import ProfilePic from "@/components/ProfilePic";

export default async function Home() {
	return (
		<>
			<ProfilePic />
			<section className="flex flex-col gap-10 mt-10 sm:mt-20 text-base sm:text-2xl mx-auto max-w-2xl text-white/80 text-center">
				<h2 className="text-[28px] sm:text-6xl sm:mb-10 font-bold text-white m-0">
					Welcome to Bloggify!
				</h2>
				<p className="leading-10 m-0">
					I&#39;m passionate about sharing my knowledge and experiences in the
					world of web development, React, and Next.js and any other technology.
				</p>
				<p className="leading-10 m-0">
					I believe in the power of technology to transform lives and bring
					innovative ideas to life. Through this blog, together we can aim to
					provide insightful and helpful content.
				</p>
				<p className="leading-10 m-0">
					Don&#39;t hesitate to share your knowledge with others. Let&#39;s
					learn and grow together!
				</p>
			</section>
		</>
	);
}
