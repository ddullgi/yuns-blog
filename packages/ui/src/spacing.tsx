import type { VariantProps } from "class-variance-authority";
import { cn } from "./cn";
import { stackVariants } from "./variants/stack-variants";

type SpacingProps = Pick<VariantProps<typeof stackVariants>, "w" | "h">;

/**
 * 빈공간을 만들어주는 컴포넌트(tailwind className에 맞춰 입력)
 * @param { string } w - 공간의 넓이
 * @param { string } h - 공간의 높이
 */
export const Spacing = ({ w, h }: SpacingProps) => {
	return <div className={cn(stackVariants({ w, h }))} />;
};
