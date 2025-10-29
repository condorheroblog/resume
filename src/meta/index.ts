import type { ResumeInformationItem } from './types';

export * from './types';

// 导入 2024-01-10 简历信息
import resume_20240110_info from './2024-01-10';
// 导入 2025-10-29 简历信息
import resume_20251029_info from './2025-10-29';

export const documentTitle = "Condor Hero 的简历";
export const resumeTitle = "个人简历";

// 创建简历信息列表
export const resumeInformationList: ResumeInformationItem[] = [
	{
		label: "2024-01-10",
		value: resume_20240110_info,
	},
	{
		label: "2025-10-29",
		value: resume_20251029_info,
	},
];


