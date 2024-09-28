import { getPost } from "@/entities/post/model/post";
import PostDetailPage from "@/page/post-detail";
import { redirect } from "next/navigation";

type PostProps = {
	params: {
		slug: string[];
	};
};

export default async function Post(params: PostProps) {
	const slug = params.params.slug;
	const post = await getPost(slug);
	if (!post) return redirect("/");

	return <PostDetailPage post={post} />;
}
