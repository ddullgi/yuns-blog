import { getPost } from "@/entities/post/model/post";
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
	return <div>post 페이지</div>;
}
