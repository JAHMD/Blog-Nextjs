import { getFormattedDate } from "@/lib/getFormattedDate";
import Link from "next/link";
import React from "react";

type Props = {
	post: BlogPostType;
};

const PostListItem = ({ post }: Props) => {
	const { id, title, date } = post;
	const formattedDate = getFormattedDate(date);

	return (
		<li className="mt-4 text-xl">
			<Link
				className="underline inline-block hover:text-white/80 transition-colors first-letter:capitalize"
				href={`/posts/${id}`}
			>
				{title}
			</Link>
			<p className="text-sm mt-2">{formattedDate}</p>
		</li>
	);
};

export default PostListItem;
