import { useState } from "react";

import { JsonEditor } from "./JsonEditor.tsx";
import { ResumeContainer } from "./ResumeContainer.tsx";
import { resumeInformationList as RESUME_INFORMATION_LIST } from "../meta";

const LATEST_RESUME = RESUME_INFORMATION_LIST[RESUME_INFORMATION_LIST.length - 1];

export function Container () {
	// 初始化选中的简历日期，优先从 URL 参数中获取
	const [selectedResumeKey, setSelectedResumeKey] = useState<string>(() => {
		// 客户端渲染时从 URL 中读取简历参数
		if (typeof window !== 'undefined') {
			const searchParams = new URLSearchParams(window.location.search);
			const resumeParam = searchParams.get("resume");
			// 检查参数是否存在且有效
			if (resumeParam && RESUME_INFORMATION_LIST.some(item => item.label === resumeParam)) {
				return resumeParam;
			}
		}
		return LATEST_RESUME?.label || "";
	});
	
	// 初始化简历信息，根据 selectedResumeKey 获取对应的简历数据
	const [resumeInformation, setResumeInformation] = useState(() => {
		if (typeof window !== 'undefined') {
			const searchParams = new URLSearchParams(window.location.search);
			const resumeParam = searchParams.get("resume");
			if (resumeParam) {
				const selectedResume = RESUME_INFORMATION_LIST.find(item => item.label === resumeParam);
				if (selectedResume) {
					return selectedResume.value;
				}
			}
		}
		return LATEST_RESUME?.value || {};
	});

	// 当选择的简历日期变化时，更新简历信息
	const handleResumeChange = (value: string) => {
		setSelectedResumeKey(value);
		const selectedResume = RESUME_INFORMATION_LIST.find(item => item.label === value);
		if (selectedResume) {
			setResumeInformation(selectedResume.value);
		}
	};

	// 格式化选项数据以适配 Select 组件
	const resumeOptions = RESUME_INFORMATION_LIST.map(item => ({
		value: item.label,
		label: item.label
	}));

	return (
		<section className="flex justify-between gap-8 max-lg:flex-col p-8 max-lg:p-4 print:p-0 h-screen overflow-auto max-lg:h-full">
			<ResumeContainer
				resumeInformation={resumeInformation}
				selectedResumeKey={selectedResumeKey}
				onResumeChange={handleResumeChange}
				resumeOptions={resumeOptions}
			/>
			<JsonEditor
				resumeInformation={resumeInformation}
				setResumeInformation={setResumeInformation}
				selectedResumeKey={selectedResumeKey}
			/>
		</section>
	);
}
