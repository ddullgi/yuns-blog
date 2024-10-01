interface SeparatorProps {
	orientation?: "horizontal" | "vertical";
	className?: string;
}

export const Separator = ({
	orientation = "horizontal",
	className = "",
}: SeparatorProps) => {
	const baseStyle = "bg-gray-300";
	const orientationStyle =
		orientation === "horizontal" ? "w-full h-px" : "h-full w-px";

	return <div className={`${baseStyle} ${orientationStyle} ${className}`} />;
};
