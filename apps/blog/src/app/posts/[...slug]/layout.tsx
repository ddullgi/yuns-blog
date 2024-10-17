import { cn } from "@/shared/utils/cn";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className={cn("md:max-w-3xl md:mx-auto")}>{children}</div>;
}
