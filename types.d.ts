type Meta = {
	id: string;
	title: string;
	date: string;
	tags: string[];
};

type BlogPostType = {
	meta: Meta;
	content: ReactElement<any, string | JSXElementConstructor<any>>;
};
