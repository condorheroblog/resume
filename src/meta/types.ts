// 导出类型定义
export interface ResumeItemType {
	basicInfo: ({ label: string; value: string; link?: undefined; } | { label: string; value: string; link: boolean; })[];
	jobIntention: { label: string; value: string; }[];
	professionalSkills: string[];
	educationExperiences?: {
		school: string;
		degree: string;
		major: string;
		time: string;
	}[];
	workExperiences: {
		company: string;
		position: string;
		time: string;
	}[];
	projectExperiences: {
		projectDetail: {
			name: string;
			time: string;
			company: string;
			position: string;
		};
		projectIntroduction?: string;
		projectResponsibilities?: string[];
		projectPerception?: string;
	}[];
}

export interface ResumeInformationItem {
	label: string;
	value: ResumeItemType;
}
