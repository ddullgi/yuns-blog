import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { cn } from "@/shared/utils/cn";
import Link from "next/link";

interface PostCardProps {
	post: PostWithFrontmatterType;
}

export const PostCard = ({ post }: PostCardProps) => {
	const postLink = `/posts${post.filePath.join("/")}`;

	return (
		<li
			className={cn(
				"flex h-full flex-col gap-3 rounded-md border shadow-md transition hover:shadow-xl hover:-translate-y-0.5",
			)}
		>
			<Link href={postLink} title={post.title} className="h-full">
				<article className={cn("flex flex-col h-full")}>
					<header className={cn("flex-shrink-0")}>
						<h4
							className={cn(
								"px-4 pt-5 text-1624 font-semibold sm:text-1825 md:text-1624 line-clamp-1",
							)}
						>
							{post.title}
						</h4>
					</header>
					<section
						className={cn(
							"flex-grow h-28 px-4 py-3 text-1422 sm:text-1622 md:text-1422",
						)}
					>
						<p className={cn("h-full line-clamp-4")}>{post.description}</p>
					</section>
				</article>
			</Link>
		</li>
	);
};
