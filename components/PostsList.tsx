import PostListItem from "@/components/PostListItem";
import { getSortedPostsData } from "@/lib/posts";

export default function PostsList() {
	const posts = getSortedPostsData();

	return (
		<section className="mt-6 mx-auto max-w-2xl">
			<h2 className="text-4xl font-bold">Blog</h2>
			<ul className="w-full">
				{posts.map((post) => (
					<PostListItem key={post.id} post={post} />
				))}
			</ul>
		</section>
	);
}
