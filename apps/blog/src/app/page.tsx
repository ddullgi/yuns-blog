import { getAllPosts } from "@/entities/post/model/post";

export default async function Home() {
	const posts = await getAllPosts();

	console.log(posts);

	return <main>main</main>;
}
