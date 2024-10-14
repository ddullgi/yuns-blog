import { cn } from "@/shared/utils/cn";
import type { PropsWithChildren } from "react";

export const PostDetailTitle = (props: PropsWithChildren) => {
	return (
		<h1
			className={cn(
				"font-bold text-gray-600 w-full text-4xl md:text-6xl whitespace-pre-wrap my-4",
			)}
		>
			{props.children}
		</h1>
	);
};
