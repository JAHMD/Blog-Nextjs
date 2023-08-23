import CustomImage from "@/components/CustomImage";
import Video from "@/components/Video";
import { compileMDX } from "next-mdx-remote/rsc";
import { JSXElementConstructor, ReactElement } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

type FileTree = {
	tree: [{ path: string }];
};

export async function getPostsMeta(): Promise<Meta[] | undefined> {
	const res = await fetch(
		"https://api.github.com/repos/JAHMD/Blog-posts/git/trees/main?recursive=1",
		{
			headers: {
				Accept: "application/vnd.github+json",
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				"X-GitHub-Api-Version": "2022-11-28",
			},
		}
	);

	if (!res.ok) {
		return undefined;
	}

	const repoFileTree: FileTree = await res.json();
	const repoFilesArray = repoFileTree.tree
		.map((file) => file.path)
		.filter((file) => file.endsWith(".mdx"));

	const posts: Meta[] = [];

	for (const file of repoFilesArray) {
		const post = await getPostByName(file);
		if (post) {
			const { meta } = post;
			posts.push(meta);
		}
	}
	return posts;
}

export async function getPostByName(
	fileName: string
): Promise<BlogPostType | undefined> {
	const res = await fetch(
		`https://raw.githubusercontent.com/JAHMD/Blog-posts/main/${fileName}`,
		{
			headers: {
				Accept: "application/vnd.github+json",
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				"X-GitHub-Api-Version": "2022-11-28",
			},
		}
	);

	if (!res.ok) {
		return undefined;
	}

	const rawMDX = await res.text();

	if (rawMDX === "404: Not Found") {
		return undefined;
	}

	const {
		frontmatter,
		content,
	}: {
		frontmatter: Omit<Meta, "id">;
		content: ReactElement<any, string | JSXElementConstructor<any>>;
	} = await compileMDX({
		source: rawMDX,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				rehypePlugins: [
					rehypeHighlight,
					rehypeSlug,
					[
						rehypeAutolinkHeadings,
						{
							behavior: "wrap",
						},
					],
				],
			},
		},
		components: {
			Video,
			CustomImage,
		},
	});

	const id = fileName.replace(/\.mdx&/, "");

	const blogPost: BlogPostType = { meta: { id, ...frontmatter }, content };

	return blogPost;
}
