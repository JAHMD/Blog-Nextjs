import PostListItem from "@/components/PostListItem";
import { getPostsMeta } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const generateMetadata = async ({
	params: { tag },
}: {
	params: { tag: string };
}): Promise<Metadata> => {
	return {
		title: `Blog | ${tag} posts`,
		description: "This is a page constains blog posts with a specific tag.",
	};
};

export const generateStaticParams = async () => {
	const posts = await getPostsMeta();

	if (!posts) {
		return [];
	}

	const tags = new Set(posts.map((post) => post.tags).flat());

	return Array.from(tags).map((tag) => ({ tag }));
};

const TagPage = async ({ params: { tag } }: { params: { tag: string } }) => {
	const posts = await getPostsMeta();

	if (!posts) {
		return <p className="text-center">Sorry, no posts available.</p>;
	}

	const tagPosts = posts.filter((post) => post.tags.includes(tag));

	if (!tagPosts.length) {
		return (
			<div className="text-center">
				<p className="mt-10">Sorry, no posts for that keyword.</p>
				<Link href="/">Back to Home</Link>
			</div>
		);
	}

	return (
		<>
			<h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
			<section className="mt-6 mx-auto max-w-2xl">
				<ul className="w-full list-none p-0">
					{tagPosts.map((post) => (
						<PostListItem key={post.id} post={post} />
					))}
				</ul>
			</section>
		</>
	);
};

export default TagPage;
