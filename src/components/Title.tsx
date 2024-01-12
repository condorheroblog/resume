interface TitleProps {
	title: string;
}

export function Title ({ title }: TitleProps) {
	return (
		<div className="border-b-4 border-blue-400">
			<span className="inline-block text-white bg-blue-400 font-bold pl-6 pr-9 max-md:pl-5 max-md:pr-6 max-md:leading-8 leading-9 rounded-e-2xl rounded-tl-3xl">
				{title}
			</span>
		</div>
	);
}
