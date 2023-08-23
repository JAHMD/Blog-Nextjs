import { getFormattedDate } from "@/lib/getFormattedDate";
import Link from "next/link";
import React from "react";

type Props = {
	post: Meta;
};

const PostListItem = ({ post }: Props) => {
	const { id, title, date } = post;
	const formattedDate = getFormattedDate(date);

	const validId = id.replace(/\.mdx/, "");

	return (
		<li className="mt-4 text-xl">
			<Link
				className="underline inline-block text-white/90 hover:text-white transition-colors first-letter:capitalize"
				href={`/posts/${validId}`}
			>
				{title}
			</Link>
			<p className="text-sm mt-2 text-white/60">{formattedDate}</p>
		</li>
	);
};

export default PostListItem;
