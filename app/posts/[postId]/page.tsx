import { getFormattedDate } from "@/lib/getFormattedDate";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import "highlight.js/styles/github-dark.css";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 86400;

export const generateMetadata = async ({
	params: { postId },
}: {
	params: { postId: string };
}): Promise<Metadata> => {
	const post = await getPostByName(`${postId}.mdx`);

	if (!post) {
		return { title: "Blog | Post not found" };
	}

	return {
		title: `Blog | ${post.meta.title}`,
		description: `This is ${post.meta.title} page`,
	};
};

export const generateStaticParams = async () => {
	const posts = await getPostsMeta();

	if (!posts) {
		return [];
	}

	return posts.map((post) => {
		const postId = post.id.replace(/\.mdx/, "");

		return { postId };
	});
};

const PostPage = async ({
	params: { postId },
}: {
	params: { postId: string };
}) => {
	const post = await getPostByName(`${postId}.mdx`);

	if (!post) {
		return notFound();
	}

	const {
		meta: { title, date, tags },
		content,
	} = post;

	const formattedDate = getFormattedDate(date);

	const tagsElements = tags.map((tag, i) => (
		<Link
			key={i}
			href={`/tags/${tag}`}
			className="text-slate-400 hover:text-white transition-colors text-lg"
		>
			{tag}
		</Link>
	));

	return (
		<>
			<section>
				<Link href="./" className="text-base no-underline hover:underline">
					← Back
				</Link>
				<h1 className="text-3xl mt-8 mb-0">{title}</h1>
				<p className="mt-0">{formattedDate}</p>
				<article>{content}</article>
			</section>
			<section>
				<h3>Related:</h3>
				<div className="flex gap-4">{tagsElements}</div>
			</section>
		</>
	);
};

export default PostPage;
