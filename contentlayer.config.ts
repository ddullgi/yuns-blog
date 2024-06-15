import { defineDocumentType, makeSource } from "contentlayer/source-files";
import type { ComputedFields } from "contentlayer/source-files";

type Doc = {
	_raw: {
		flattenedPath: string;
		// 기타 속성들 추가 가능
	};
	// 다른 문서 속성들 추가 가능
};

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: ComputedFields<"Post"> = {
	slug: {
		type: "string",
		resolve: (doc: Doc) => `/${doc._raw.flattenedPath}`,
	},
	slugAsParams: {
		type: "string",
		resolve: (doc: Doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
	},
	category: {
		type: "string",
		resolve: (doc: Doc) => doc._raw.flattenedPath.split("/")[1],
	},
};

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: "posts/**/*.mdx",
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		description: {
			type: "string",
		},
		thumbnail: {
			type: "string",
			required: false,
		},
		writeDate: {
			type: "date",
			required: true,
		},
		releaseDate: {
			type: "date",
			required: true,
		},
	},
	computedFields,
}));

export default makeSource({
	contentDirPath: "./content",
	documentTypes: [Post],
});
