import { defineDocumentType, makeSource } from "contentlayer/source-files";
import type { ComputedFields } from "contentlayer/source-files";

type Doc = {
	_raw: {
		flattenedPath: string;
		sourceFileName: string;
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
	fileName: {
		type: "string",
		resolve: (doc: Doc) => doc._raw.sourceFileName.split(".")[0],
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
		categories: {
			type: "list",
			of: { type: "string" },
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
	contentDirPath: "./",
	documentTypes: [Post],
});
