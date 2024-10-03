interface SeparatorProps {
	orientation?: "horizontal" | "vertical";
	className?: string;
}

export const Separator = ({
	orientation = "horizontal",
	className = "",
}: SeparatorProps) => {
	const orientationStyle =
		orientation === "horizontal" ? "w-full h-px" : "h-full w-px";

	return <div className={`${orientationStyle} ${className}`} />;
};
