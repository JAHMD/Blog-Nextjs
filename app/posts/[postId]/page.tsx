import { getFormattedDate } from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
	params: { postId },
}: {
	params: { postId: string };
}): Promise<Metadata> => {
	const posts = getSortedPostsData();
	const foundPost = posts.find((post) => post.id === postId);

	if (!foundPost) {
		return { title: "Blog | Post not found" };
	}
	return {
		title: `Blog | ${foundPost.title}`,
		description: `This is ${foundPost.title} page`,
	};
};

export const generateStaticParams = async () => {
	const posts = getSortedPostsData();
	return posts.map((post) => ({ postId: post.id }));
};

const PostPage = async ({
	params: { postId },
}: {
	params: { postId: string };
}) => {
	const posts = getSortedPostsData();
	const foundPost = posts.find((post) => post.id === postId);

	if (!foundPost) {
		return notFound();
	}

	const { title, date, contentHtml } = await getPostData(postId);
	const formattedDate = getFormattedDate(date);

	return (
		<main className="container prose prose-xl prose-invert py-10">
			<Link href="./" className="text-base no-underline">
				← Back
			</Link>
			<h1 className="text-3xl mt-8 mb-0">{title}</h1>
			<p className="mt-0">{formattedDate}</p>
			<article>
				<section dangerouslySetInnerHTML={{ __html: contentHtml }} />
			</article>
		</main>
	);
};

export default PostPage;
