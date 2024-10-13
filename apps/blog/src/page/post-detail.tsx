import type { PostWithFrontmatterType } from "@/entities/post/model/post.type";
import { MdxRemote } from "@/entities/post/ui/mdx/mdx-remote";
import { cn } from "@/shared/utils/cn";
import { Separator } from "@yuns-blog/ui/separator";

type PostPageProps = {
	post: PostWithFrontmatterType;
};

export default function PostDetailPage({ post }: PostPageProps) {
	return (
		<section className={cn("max-w-2xl")}>
			<MdxRemote source={post.content} />
			<Separator />
			<div>123</div>
		</section>
	);
}
