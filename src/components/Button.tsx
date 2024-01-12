import type { MouseEvent, ReactNode } from "react";


interface ButtonProps {
	children: ReactNode;
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ children, onClick, className = "" }: ButtonProps) {
	return (
		<button
			className={`bg-blue-500 hover:bg-blue-700 text-white hover:text-cyan-100 font-medium py-1 px-3 rounded ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
