import PostListItem from "@/components/PostListItem";
import { getSortedPostsData } from "@/lib/posts";

export default function PostsList() {
	const posts = getSortedPostsData();

	return (
		<section className="mt-6 mx-auto max-w-2xl">
			<ul className="w-full">
				{posts.map((post) => (
					<PostListItem key={post.id} post={post} />
				))}
			</ul>
		</section>
	);
}
