import type { MouseEvent, ReactNode } from "react";


interface ButtonProps {
	children: ReactNode;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ children, onClick }: ButtonProps) {
	return (
		<button
			className={`bg-blue-500 hover:bg-blue-700 text-white hover:text-cyan-100 font-medium py-1 px-3 rounded`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
