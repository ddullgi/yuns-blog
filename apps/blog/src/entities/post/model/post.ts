import fs from "node:fs";
import path from "node:path";
import { ENVIRONMENT } from "@/shared/environment/index";
import {
	isFirstDateBeforeSecond,
	sortByDateDescending,
} from "@yuns-blog/date/sort-date";
import { compileMDX } from "next-mdx-remote/rsc";
import type {
	FrontmatterType,
	PostType,
	PostWithFrontmatterType,
} from "./post.type";

const postsDirectory = path.join(process.cwd(), "posts");

const readDirectory = (directory: string): Pick<PostType, "filePath">[] => {
	return fs
		.readdirSync(directory, { withFileTypes: true })
		.reduce<Pick<PostType, "filePath">[]>((posts, file) => {
			const fullPath = path.join(directory, file.name);
			if (file.isDirectory()) {
				return posts.concat(readDirectory(fullPath));
			}
			if (file.isFile() && path.extname(file.name) === ".mdx") {
				const filePath = fullPath
					.replace(postsDirectory, "")
					.replace(/^\/+/, "")
					.replace(/\.mdx$/, "")
					.split("/");
				posts.push({ filePath });
			}
			return posts;
		}, []);
};

const findPostFile = (
	directory: string,
	filePath: string[],
): PostType | null => {
	const fullPath = path.join(directory, ...filePath);
	const fileExtensions = [".md", ".mdx"];
	for (const ext of fileExtensions) {
		const fullFilePath = `${fullPath}${ext}`;
		if (fs.existsSync(fullFilePath)) {
			const content = fs.readFileSync(fullFilePath, "utf8");
			return { content, filePath };
		}
	}
	return null;
};

export const getPost = async (
	filePath: string[],
): Promise<PostWithFrontmatterType | null> => {
	const post = findPostFile(postsDirectory, filePath);

	if (!post) return null;
	const frontmatter = await getFrontmatter(post.content);
	return Object.assign(post, frontmatter);
};

export const getCategoryPosts = async (filePath: string) => {
	const fullPath = path.join(postsDirectory, filePath);

	const posts = await Promise.all(
		readDirectory(fullPath).map((path) => getPost(path.filePath)),
	);

	const validPosts = posts.filter(
		(post) => post !== null,
	) as Array<PostWithFrontmatterType>;

	const today = new Date().toISOString();

	// 아직 releaseDate가 되지않은 글들은 필터링하여 보여주지 않도록 구성합니다.
	// 개발 환경에서는 신경쓰지 않아도 되게 구성합니다.
	const filteredByReleaseDatePosts =
		ENVIRONMENT.NODE_ENV === "development"
			? validPosts.slice()
			: validPosts.filter(
					(post) => !isFirstDateBeforeSecond(today, post.releaseDate),
				);

	if (filteredByReleaseDatePosts.length > 1) {
		filteredByReleaseDatePosts.sort((a, b) =>
			sortByDateDescending(a.releaseDate, b.releaseDate),
		);
	}

	return filteredByReleaseDatePosts;
};

export const getFrontmatter = async (
	source: string,
): Promise<FrontmatterType> => {
	const { frontmatter } = await compileMDX<FrontmatterType>({
		source,
		options: { parseFrontmatter: true },
	});
	return frontmatter;
};

export const getAllPosts = async () => {
	const posts = await Promise.all(
		readDirectory(postsDirectory).map((path) => getPost(path.filePath)),
	);

	const validPosts = posts.filter(
		(post) => post !== null,
	) as Array<PostWithFrontmatterType>;

	const today = new Date().toISOString();

	// 아직 releaseDate가 되지않은 글들은 필터링하여 보여주지 않도록 구성합니다.
	// 개발 환경에서는 신경쓰지 않아도 되게 구성합니다.
	const filteredByReleaseDatePosts =
		ENVIRONMENT.NODE_ENV === "development"
			? validPosts.slice()
			: validPosts.filter(
					(post) => !isFirstDateBeforeSecond(today, post.releaseDate),
				);

	if (filteredByReleaseDatePosts.length > 1) {
		filteredByReleaseDatePosts.sort((a, b) =>
			sortByDateDescending(a.releaseDate, b.releaseDate),
		);
	}

	return filteredByReleaseDatePosts;
};

export const getCategories = (): string[] => {
	const directories = fs.readdirSync(postsDirectory, { withFileTypes: true });
	const categories = directories
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);
	return categories;
};
