import { cn } from "./cn";

interface SeparatorProps {
	orientation?: "horizontal" | "vertical";
	className?: string;
}

/**
 * 분할 선을 만드는 컴포넌트(tailwind className에 맞춰 입력)
 * @param { "horizontal" | "vertical" } orientation - 방향 horizontal | vertical
 * @param { string } className - 추가적으로 넣을 className
 */
export const Separator = ({
	orientation = "horizontal",
	className = "",
}: SeparatorProps) => {
	const orientationStyle =
		orientation === "horizontal" ? "w-full h-px" : "h-full w-px";

	return <div className={cn(orientationStyle, className)} />;
};
