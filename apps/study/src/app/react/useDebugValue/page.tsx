"use client";
import { useDebugValue, useState } from "react";

// 현재 시간을 정의하는 사용자 정의 훅
function useDate() {
	const date = new Date();
	// useDeugValue롤 디버깅 정보를 기록
	useDebugValue(date, (date) => `현재 시간: ${date.toISOString()}`);

	return date;
}

export default function Page() {
	const date = useDate();
	const [counter, setCounter] = useState(0); // 렌더링을 발생시키기 위한 변수

	function handleClick() {
		setCounter((prev) => prev + 1);
	}

	return (
		<>
			<h1>useDebugValue</h1>
			<h2>
				{counter} {date.toISOString()}
			</h2>
			<button onClick={handleClick} type="button">
				+
			</button>
		</>
	);
}
