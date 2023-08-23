import PostListItem from "@/components/PostListItem";
import { getPostsMeta } from "@/lib/posts";

export default async function PostsList() {
	const posts = await getPostsMeta();

	return (
		<section className="mt-6 mx-auto max-w-2xl">
			{posts ? (
				<ul className="w-full">
					{posts.map((post) => (
						<PostListItem key={post.id} post={post} />
					))}
				</ul>
			) : (
				<p>Sorry, no posts are availalbe.</p>
			)}
		</section>
	);
}
