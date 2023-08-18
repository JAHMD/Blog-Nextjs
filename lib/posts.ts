import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blog-posts");

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		const blogPost: BlogPostType = {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date,
		};

		// Combine the data with the id
		return blogPost;
	});
	// Sort posts by date
	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();

	const blogPostWithHTML: BlogPostType & { contentHtml: string } = {
		id,
		title: matterResult.data.title,
		date: matterResult.data.date,
		contentHtml,
	};

	// Combine the data with the id
	return blogPostWithHTML;
}
