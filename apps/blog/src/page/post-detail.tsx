import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { MdxRemote } from "@/entities/post/ui/mdx/mdx-remote";

type PostPageProps = {
	post: PostWithFrontmatterType;
};

export default function PostDetailPage({ post }: PostPageProps) {
	return (
		<section className="max-w-2xl">
			<MdxRemote source={post.content} />
		</section>
	);
}
