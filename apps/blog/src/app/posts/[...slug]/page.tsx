import { getPost } from "@/entities/post/model/post";
import { MdxRemote } from "@/entities/post/ui/mdx/mdx-remote";
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
	return <MdxRemote source={post.content} />;
}
