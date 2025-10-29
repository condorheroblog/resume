import type { ResumeItemType } from "../meta";

import { useState } from "react";

import { Select } from "./Select";
import { Button } from "./Button";
import { ResumeTemplate1 } from "./ResumeTemplate1";
import { ResumeTemplate2 } from "./ResumeTemplate2";

interface SelectOption {
  value: string;
  label: string | React.ReactNode;
}

interface ResumeContainerProps {
	resumeInformation: ResumeItemType;
	selectedResumeKey: string;
	onResumeChange: (value: string) => void;
	resumeOptions: SelectOption[];
}

export function ResumeContainer ({
	resumeInformation,
	selectedResumeKey,
	onResumeChange,
	resumeOptions
}: ResumeContainerProps) {
	const [templateNumber, setTemplateNumber] = useState(() => {
		const searchParams = new URLSearchParams(window.location.search);
		return searchParams.get("template") ?? "1"
	});

	return (
		<section className="overflow-auto max-lg:overflow-visible w-7/12 max-lg:w-full bg-teal-50 px-5 pb-5 max-lg:px-3 rounded-lg print:w-full print:rounded-none print:bg-white print:p-0 print:overflow-visible">
			<div className="print:hidden flex justify-between gap-3 py-4">
				<div className="flex gap-3">
					<Select
						className="w-40"
						options={resumeOptions}
						defaultValue={selectedResumeKey}
						onChange={(value) => {
							onResumeChange(value);
							
							// 更新 URL 搜索参数
							const url = new URL(window.location.href);
							url.searchParams.set("resume", value);
							window.history.pushState({}, "", url);
						}}
						placeholder="选择简历日期"
					/>
					{
						Array.from(({ length: 2 })).map((_, buttonIndex) => {
							return (
								<Button
									key={buttonIndex}
									onClick={() => {
										const newNumber = buttonIndex + 1;
										setTemplateNumber(`${newNumber}`);
										
										// 更新URL搜索参数
										const url = new URL(window.location.href);
										url.searchParams.set("template", `${buttonIndex + 1}`);
										window.history.pushState({}, "", url);
									}}
									className={templateNumber === `${buttonIndex + 1}` ? "bg-cyan-500 hover:bg-cyan-600" : ""}
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
