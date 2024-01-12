interface TitleProps {
	title: string;
	template?: number;
}

export function Title ({ title, template = 1 }: TitleProps) {

	if (template === 1) {
		return (
			<div className="border-b-4 border-blue-400">
				<span className="inline-block text-white bg-blue-400 font-bold pl-6 pr-9 max-md:pl-5 max-md:pr-6 max-md:leading-8 leading-9 rounded-e-2xl rounded-tl-3xl">
					{title}
				</span>
			</div>
		);
	}

	if (template === 2) {
		return (
			<>
				<div className="border-b-4 border-blue-400"></div>
				<span className="inline-block text-blue-400 font-bold text-xl pt-2">
					{title}
				</span>
			</>
		);
	}

	return null;
}
