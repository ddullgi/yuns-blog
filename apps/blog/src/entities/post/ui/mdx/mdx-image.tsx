import Image from "next/image";
import type { HTMLProps } from "react";

export function MdxImage(props: HTMLProps<HTMLImageElement>) {
	const { src } = props;
	const width = Number(props.width);
	const height = Number(props.height);

	if (src) {
		if (src.startsWith("http")) {
			// eslint-disable-next-line @next/next/no-img-element
			return (
				<img
					width={width}
					src={src}
					height={height}
					alt={props.alt || ""}
					title={props.alt || ""}
					aria-label={props.alt || ""}
					crossOrigin="anonymous"
				/>
			);
		}
		return (
			<Image
				src={src}
				width={width}
				height={height}
				alt={props.alt || ""}
				title={props.alt || ""}
				aria-label={props.alt || ""}
				crossOrigin="anonymous"
				placeholder="empty"
				className={` object-cover ${props.className}`}
			/>
		);
	}
	return <p>Currently, image is not available. {src}</p>;
}
