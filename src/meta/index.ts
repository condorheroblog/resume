export const basicInfo = [
	{
		// labelEn: "name",
		label: "姓名",
		value: "李心伟"
	},
	{
		// labelEn: "sex",
		label: "性别",
		value: "男"
	},
	{
		// labelEn: "age",
		label: "年龄",
		value: "26"
	},
	{
		// labelEn: "experience",
		label: "经验",
		value: "4.5 年"
	},
	{
		// labelEn: "education",
		label: "学历",
		value: "本科"
	},
	{
		// labelEn: "phone",
		label: "电话",
		value: "18297806219"
	},
	{
		// labelEn: "college",
		label: "院校",
		value: "安徽财经大学"
	},
	{
		// labelEn: "email",
		label: "邮箱",
		value: "love2xinwei@gmail.com"
	},
	{
		// labelEn: "blog",
		label: "博客",
		value: "juejin.cn/user/1046390801441949",
		link: true
	},
	{
		// labelEn: "GitHub",
		label: "GitHub",
		value: "github.com/condorheroblog",
		link: true
	},
];

export const workExperiences = [
	{
		time: "2018/10 - 2020/1",
		company: "上海创先泰克教育科技有限公司",
		post: "前端开发工程师",
	},
	{
		time: "2020/4 - 2024",
		company: "上海杉数网络科技有限公司",
		post: "前端开发工程师",
	},
];

export const jobIntention = [
	{
		label: "岗位",
		value: "前端开发工程师"
	},
	{
		label: "薪资",
		value: "**K ~ **K"
	},
	{
		label: "地点",
		value: "上海市"
	},
	{
		label: "工作性质",
		value: "全职"
	}
];

export const professionalSkills = [
	"熟练使用 Vue 和 React 全家桶",
	"有 Webpack 和 Vite 插件开发开发经验",
	"熟悉 Node.js + TS 开发，有 npm 模块开发经验",
	"擅长前端模块化/组件化编程",
	"有微信小程序、公众号、uni-app 和移动端开发经验",
];

export const projectExperiences = [
	{
		projectName: {
			time: "2021/3 - 2022/6",
			company: "上海杉数网络科技有限公司",
			post: "前端开发工程师",
		},
		projectIntroduction: "本项目使用 React18 + antd 进行开发，是一个标准的 PC 管理后台",
		projectResponsibilities: [
			"前端项目负责人"
		],
		"projectPerception": "开发了用户手册插件"
	}
];
export const documentTitle = "Condor Hero 的简历";
export const resumeTitle = "个人简历";

export const resumeInformation = {
	resumeTitle,
	basicInfo,
	jobIntention,
	professionalSkills,
	workExperiences,
	projectExperiences,
}

export type ResumeInformationType = typeof resumeInformation;
