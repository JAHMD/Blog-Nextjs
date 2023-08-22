import PostsList from "@/components/PostsList";

const PostsPage = () => {
	return (
		<main className="container py-10">
			<section className="flex flex-col gap-6">
				<h2 className="text-2xl sm:text-6xl mb-6 font-bold text-white">
					Blog posts
				</h2>
				<PostsList />
			</section>
		</main>
	);
};

export default PostsPage;
