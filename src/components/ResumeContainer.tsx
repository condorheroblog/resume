import { ResumeTemplate1 } from "./ResumeTemplate1";
import { ResumeTemplate2 } from "./ResumeTemplate2";
import { Button } from "./Button";
import type { ResumeInformationType } from "../meta";
import { useState } from "react";

interface ResumeContainerProps {
	resumeInformation: ResumeInformationType;
}

export function ResumeContainer ({ resumeInformation }: ResumeContainerProps) {
	const [templateNumber, setTemplateNumber] = useState(() => {
		const hash = window.location.hash;
		return new URLSearchParams(hash.startsWith("#") ? hash.slice(1) : hash).get("template")
	});

	return (
		<section className="overflow-auto max-md:overflow-visible w-7/12 max-md:w-full bg-teal-50 px-5 pb-5 max-md:px-3 rounded-lg print:w-full print:rounded-none print:bg-white print:p-0 print:overflow-visible">
			<div className="print:hidden flex justify-between gap-3 py-4">
				<div className="flex gap-3">
					{
						Array.from(({ length: 2 })).map((_, buttonIndex) => {
							return (
								<Button
									key={buttonIndex}
									onClick={() => {
										const newNumber = buttonIndex + 1;
										setTemplateNumber(`${newNumber}`);
										window.location.href = import.meta.env.BASE_URL + `#template=${buttonIndex + 1}`

									}}
								>
									模板 {buttonIndex + 1}
								</Button>
							);
						})
					}
				</div>
				<div className="flex gap-3">
					<Button onClick={() => {window.print()}}>导出 / 保存</Button>
					<Button>
						<a href="https://github.com/condorheroblog/resume" target="_blank">Github</a>
					</Button>
				</div>
			</div>
			{ templateNumber === "1" ? <ResumeTemplate1 resumeInformation={resumeInformation} /> : null}
			{ templateNumber === "2" ? <ResumeTemplate2 resumeInformation={resumeInformation} /> : null}
		</section>
	);
}
