//* GetStaticPaths, GetStaticProps 예제
// import type { GetStaticPaths, GetStaticProps } from "next";
// import { useRouter } from "next/router";

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { id } = params

//   const post = await fetchPost(id)

//   return {
//     props: { post }
//   }
// }

// export default function Post({ post }: { post: Post }) {
//   const router = useRouter()
//   // 아직 빌드되지 않은 페이지에 왔을 경우 사용자에게 노출할
//   // 로딩 컴포넌트를 정의할 수 있다.
//   if (router.isFallback) {
//     return <div>Loading...</div>
//   }
// }

import type { GetServerSideProps } from "next";

export default function Post({ post }: { post: Post }) {
	// 렌더링
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const {
		query: { id = "" },
	} = context;
	const post = await fetchPost(id.toString());
	return {
		props: { post },
	};
};
