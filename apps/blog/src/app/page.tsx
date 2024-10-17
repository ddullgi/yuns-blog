import { getAllPosts } from "@/entities/post/model/post";
import PostsPage from "@/page/posts";

export default async function Home() {
	const posts = await getAllPosts();

	return (
		<main>
			<PostsPage posts={posts} />
		</main>
	);
}
