export type PostType = {
	content: string;
	filePath: string[];
};

export const CATEGORIES_LIST = ["react", "nextjs", "frontend"] as const;
export type CategoriesType = (typeof CATEGORIES_LIST)[number];

export interface FrontmatterType {
	title: string;
	description: string;
	thumbnail: string;
	categories: CategoriesType;
	writeDate: string;
	releaseDate: string;
	canView: boolean;
}

export type PostWithFrontmatterType = PostType & FrontmatterType;
