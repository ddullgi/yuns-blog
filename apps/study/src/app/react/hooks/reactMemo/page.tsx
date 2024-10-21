"use client";

import { type ChangeEvent, memo, useEffect, useState } from "react";

const ChildComponent = ({ value }: { value: string }) => {
	useEffect(() => {
		console.log("[no memo] 렌더링!");
	});

	return <>안녕하세요! {value}</>;
};

const MemoChildComponent = memo(({ value }: { value: string }) => {
	useEffect(() => {
		console.log("[memo] 렌더링!");
	});

	return <>안녕하세요! {value}</>;
});

export default function ParentComponent() {
	const [state, setState] = useState(1);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setState(Number(e.target.value));
	}

	return (
		<>
			<input type="number" value={state} onChange={handleChange} />
			<ChildComponent value="hello" />
			<MemoChildComponent value="hello" />
		</>
	);
}
