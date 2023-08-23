import PostsList from "@/components/PostsList";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
	title: "Blog | Posts",
	description: "This is the page that contains all of the posts",
};

const PostsPage = () => {
	return (
		<section className="flex flex-col gap-6">
			<h2 className="text-2xl sm:text-6xl mb-6 font-bold text-white">
				Blog posts
			</h2>
			<PostsList />
		</section>
	);
};

export default PostsPage;
