import { cn } from "./cn";

interface SpacingProps {
	w?: string;
	h?: string;
}

export const Spacing = ({ w = "", h = "" }: SpacingProps) => {
	return <div className={cn(w, h)} />;
};
