import { getAllPosts, getPost } from "@/entities/post/model/post";
import PostDetailPage from "@/page/post-detail";
import { redirect } from "next/navigation";

type PostProps = {
	params: {
		slug: string[];
	};
};

export default async function Post({ params: { slug } }: PostProps) {
	const post = await getPost(slug);
	if (!post) return redirect("/");

	return <PostDetailPage post={post} />;
}

export const generateStaticParams = async () => {
	return (await getAllPosts()).map((post) => ({
		slug: post.filePath,
	}));
};
