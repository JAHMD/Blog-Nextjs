import PostsList from "@/components/PostsList";
import RefreshBtn from "@/components/RefreshBtn";
import { getPostsMeta } from "@/lib/posts";
import { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
	title: "Blog | Posts",
	description: "This is the page that contains all of the posts",
};

const PostsPage = async () => {
	const posts = await getPostsMeta();

	return (
		<section className="flex flex-col gap-6">
			<h2 className="text-2xl sm:text-6xl mb-6 font-bold text-white m-0">
				Blog posts
			</h2>
			<RefreshBtn path="posts" />
			<PostsList posts={posts} />
		</section>
	);
};

export default PostsPage;
