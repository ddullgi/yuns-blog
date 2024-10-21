import Link from "next/link";

export default function Page() {
	return (
		<ul>
			<li>
				<Link href="/react/hooks/useDebugValue">useDebugValue</Link>
			</li>
			<li>
				<Link href="/react/hooks/customHook">customHook</Link>
			</li>
		</ul>
	);
}
