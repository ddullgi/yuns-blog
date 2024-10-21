"use client";
import { useEffect, useState } from "react";

// HTTPS 요청을 하는 사용자 정의 훅
function useFetch<T>(
	url: string,
	{ method, body }: { method: string; body?: XMLHttpRequestBodyInit },
) {
	// 응답 결과
	const [result, setResult] = useState<T | undefined>();
	// 요청 중 여부
	const [isLoading, setIsLoading] = useState<boolean>(false);
	// 2xx 3xx로 정상 응답인지 여부
	const [ok, setOk] = useState<boolean | undefined>();
	// HTTP status
	const [status, setStatus] = useState<number | undefined>();

	useEffect(() => {
		const abortController = new AbortController();
		async () => {
			setIsLoading(true);

			const response = await fetch(url, {
				method,
				body,
				signal: abortController.signal,
			});

			setOk(response.ok);
			setStatus(response.status);

			if (response.ok) {
				const apiResult = await response.json();
				setResult(apiResult);
			}
		};

		setIsLoading(false);

		return () => {
			abortController.abort();
		};
	}, [url, method, body]);

	return { ok, result, isLoading, status };
}

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export default function Page() {
	// 사용자 지정 훅 사용
	const { ok, result, isLoading, status } = useFetch<Array<Todo>>(
		"https://jsonplaceholder.typicode.com/todos",
		{
			method: "GET",
		},
	);

	useEffect(() => {
		if (!isLoading) {
			console.log("fetchResult >>", status);
		}
	}, [status, isLoading]);

	return (
		<div>
			{ok
				? (result || []).map(({ userId, title }) => (
						<div key={userId}>
							<p>{userId}</p>
							<p>{title}</p>
						</div>
					))
				: null}
		</div>
	);
}
