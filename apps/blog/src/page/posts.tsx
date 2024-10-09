import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { PostCard } from "@/entities/post/ui/post/post-card";

type PostsPageProps = {
	posts: PostWithFrontmatterType[];
};

export default function PostsPage({ posts }: PostsPageProps) {
	return (
		<>
			<ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
				{posts.map((post) => (
					<PostCard key={post.title} post={post} />
				))}
			</ul>
		</>
	);
}
