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
		value: "5 年"
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
		time: "2018 / 10 - 2020 / 01",
		company: "上海创先泰克教育科技有限公司",
		post: "前端开发工程师",
	},
	{
		time: "2020 / 04 - 2024",
		company: "上海杉数网络科技有限公司",
		post: "前端开发工程师",
	},
];

export const jobIntention = [
	{
		label: "期望职位",
		value: "前端开发工程师"
	},
	{
		label: "期望薪资",
		value: "**K ~ **K"
	},
	{
		label: "期望城市",
		value: "上海市"
	},
	{
		label: "目前状态",
		value: "随时到岗"
	}
];

// https://github.com/resumejob/awesome-resume
export const professionalSkills = [
	"对 Vue 和 React 有丰富的开发经验，具备一定的框架设计能力",
	"熟悉模块化、前端编译和构建工具，有 npm 模块、Webpack 和 Vite 插件开发开发经验",
	"熟练移动端项目搭建，有微信小程序、公众号、uni-app 和移动端网页开发经验",
	"熟悉 Node.js、ES6+、TypeScript 开发",
];

// https://juejin.cn/post/6844904138967515150
// STAR 法则是指在描述中依次出现：Situation（情景），Task（任务），Action（行动）和 Result（结果）信息的描述一件事的原则
export const projectExperiences = [
	{
		projectName: {
			time: "2023/10 - 2024/02",
			company: "上海杉数网络科技有限公司",
			post: "前端开发工程师",
		},
		projectIntroduction: "教研平台项目，最短的时间提供出来一个前后端可用的产品，痛点在没有后端的情况下开发，后端介入后以最小的成本快速上线，如何有效的 mock 数据。",
		projectResponsibilities: "使用写死的数据（没有交互体验）或者 JSON-server（需要单独部署服务）最简单的成本就是本地利用 Vite 提供的服务器模拟真实数据，线上拦截 XHR 或者 Fetch 请求，为此实现了 <a class='link' href='https://github.com/condorheroblog/vite-plugin-fake-server' target='_blank'>vite-plugin-fake-server</a> 插件，提供一流的开发体验和数据模拟体验，助力项目快速研发。",
		projectPerception: "偶尔从日常项目抽身出来看看有什么事情常做且没有技术难度的，那么基本是可以用技术解决的。"
	},
	{
		projectName: {
			time: "2023/06 - 2023/10",
			company: "上海杉数网络科技有限公司",
			post: "前端开发工程师",
		},
		projectIntroduction: "玛氏项目公司推出自主产品，一个在一个项目中内嵌 Demand、Insight、Inventory 等等，每一个大模块都是一个小项目，涉及到前端架构的调整，SPA 不利于开发组织代码，需要使用新的软件架构",
		projectResponsibilities: "参与架构设计，经过讨论 MPA 需要跳转用户体验不好，项目模块也没有达到使用微前端的程度，最后使用了 monorepo，可以很好的组织代码，同时在未来也很容易迁移到微前端。",
		projectPerception: "开源让我学会了 monorepo，转身就用到了项目上，不仅要做到从书中学，也要做到从事上练。"
	},
	{
		projectName: {
			time: "2022/10 - 2023/06",
			company: "上海杉数网络科技有限公司",
			post: "前端开发工程师",
		},
		projectIntroduction: "斯凯奇项目中的折扣仿真模块：涉及到中文数字、阿拉伯数字以及金额的相互转换，前端实现，遇到的难点是现有开源项目不符合数字的「分节阅读法」金额不符合人民银行的规定。",
		projectResponsibilities: "为了解决以上难题，参考分节阅读和国务院颁布的大数阅读，以及中国人民银行规范，开发了 <a class='link' href='https://github.com/condorheroblog/number-zh' target='_blank'>number-zh</a> 系列，一举解决类似的需求。",
		projectPerception: "把小的需求模块化，可以缩短后续产品开发时间和提升交付质量。"
	},
	{
		projectName: {
			time: "2021/06 - 2022/10",
			company: "上海杉数网络科技有限公司",
			post: "前端开发工程师",
		},
		projectIntroduction: "斐乐项目开始实行标准化交付，要求提供用户手册的在线（vitepress/vuepress 搭建）和 PDF（根据网页自动生成） 版本，遇到的问题是：PDF 版本导出没有大纲和无法自定义页眉页脚的 URL。",
		projectResponsibilities: "为了解决生成 PDF 的缺陷，通过半年的时间调研 Puppeteer 生成 PDF 配合 pdf-lib 低级 API 操作 PDF 原数据，开源了 <a class='link' href='https://github.com/condorheroblog/vuepress-plugin-export-pdf' target='_blank'>vuepress-plugin-export-pdf</a> 和 <a class='link' href='https://github.com/condorheroblog/vitepress-export-pdf' target='_blank'>vitepress-export-pdf</a> 来提高交付质量。",
		projectPerception: "自动化标准化交付用户手册，可以提高产品的工作效率和项目的交付质量，值得花时间去研究和打磨细节。"
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
