import type { ResumeItemType } from './types';

// 基本信息
const basicInfo = [
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
		value: "28"
	},
	{
		// labelEn: "experience",
		label: "经验",
		value: "7 年"
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

// 教育经历
const educationExperiences = [
	{
		school: "安徽财经大学",
		degree: "本科",
		major: "应用电子",
		time: "2016 - 2019",
	},
];

// 工作经验
const workExperiences = [
	{
		time: "2024.07 - 2025.10",
		company: "上海博续明观科技有限公司",
		position: "高级前端开发工程师",
	},
	{
		time: "2020.04 - 2024.01",
		company: "上海杉数网络科技有限公司",
		position: "前端开发工程师",
	},
	{
		time: "2018.10 - 2020.01",
		company: "上海创先泰克教育科技有限公司",
		position: "前端开发工程师",
	},
];

// 求职意向
const jobIntention = [
	{
		label: "期望职位",
		value: "高级前端开发工程师"
	},
	// {
	// 	label: "期望薪资",
	// 	value: "**K ~ **K"
	// },
	{
		label: "期望城市",
		value: "上海市"
	},
	{
		label: "目前状态",
		value: "随时到岗"
	}
];

// 专业技能
const professionalSkills = [
	"熟练使用 ChatGPT、Genimi 等 AI 工具梳理业务逻辑，擅长 Cursor 和 Trae 的应用，提高了项目分析和开发效率。",
	"五年的 React18+ 开发经验和三年的 Vue3 开发经验，具备深厚的前端技术基础，能够灵活应对各种前端项目需求。",
	"擅长总结项目业务，提炼出通用技术并开源，展示了优秀的技术能力和创新能力。",
	"擅长单页面应用（SPA）、微信小程序、Nuxt.js 及 Next.js，能够高效构建移动端应用，提升了用户体验和性能。",
	"精通使用 TailwindCSS、Vue3、CSS3、HTML5，能够优化用户界面和提升开发效率，实现了项目的快速迭代和交付。",
	"熟练应用 React Hooks、TypeScript 和 Node.js，展现了跨领域的技术能力，为项目提供了技术支持和解决方案。",
	"具备 Webpack 和 Vite 插件开发经验，能够优化前端构建流程和提升性能，推动了前端技术的持续发展。"
];

// 项目经验
const projectExperiences = [
	{
		projectDetail: {
			name: "博采",
			time: "2025.03-2025.09",
			company: "上海博续明观科技有限公司",
			position: "高级前端开发工程师",
		},
		projectIntroduction: "博采是一个「供应链」ESG 管理系统，全面支持供应商的全周期管理，包括 ESG 与碳管理能力的提升。项目基于 Vue3、Pinia、Element Plus 和 TailwindCSS 构建。",
		projectResponsibilities: [
			"负责项目脚手架搭建，基于 RBAC 设计权限体系，封装 BPMN 满足项目审批流。",
			"基于 PlusProComponents 封装表单和表格，持续优化并成为 PlusProComponents 的赞助者与贡献者。",
			"搭建项目业务指标体系，运用 vxe-table 支持虚拟滚动，提升大数据量渲染性能。",
			"承担测试角色，撰写项目测试用例，完成项目一期的测试验证工作，保障交付质量。"
		],
		projectPerception: ""
	},
	{
		projectDetail: {
			name: "博观",
			time: "2024.10-2025.02",
			company: "上海博续明观科技有限公司",
			position: "高级前端开发工程师",
		},
		projectIntroduction: "博观是一个符合国际国内主流框架的 ESG 报告与管理 ERP 系统，旨在智能化管理 ESG 数据的分类、收集、分析、报告与对外披露。项目基于本人开源的 React 项目模板 <a class='link' href='https://github.com/condorheroblog/react-antd-admin' target='_blank'>react-antd-admin</a> 构建。",
		projectResponsibilities: [
			"运用 Echarts 开发智慧大屏，显著提升数据可视化和展示效果，支持用户更直观地理解和分析 ESG 数据。",
			"二次封装 keepalive-for-react，实现项目中多 Tab 页面的缓存机制，优化页面性能，确保用户在切换页面时保持数据一致性。",
			"重构项目图标库，通过 unplugin-icons 发布内部图标库，实现按需加载引入的图标。",
			"封装项目 ESG AI 悬浮球聊天智能体，增强用户互动性和智能问答功能，提升用户体验和系统的智能化水平。"
		],
		projectPerception: ""
	},
	{
		projectDetail: {
			name: "博碳",
			time: "2024.08-2024.11",
			company: "上海博续明观科技有限公司",
			position: "高级前端开发工程师",
		},
		projectIntroduction: "博碳项目是一个基于 React 和 Antd 构建的项目，旨在为企业提供便捷的碳足迹计算器，帮助企业量化温室气体排放，并生成高透明度的合规报告。该项目旨在提升碳资产的综合利用，推动数据驱动的可持续发展和气候风险管理。",
		projectResponsibilities: [
			"使用 Tiptap 实现了一个高性能的富文本编辑器，作为 reactjs-tiptap-editor 核心贡献者之一，优化了编辑器的性能和用户体验。",
			"重构了 prosemirror-docx 项目，支持在浏览器中使用 Tiptap 导出为 Word 文件，显著提升了导出的速度和效率。",
			"基于 LogicFlow 项目设计了一个碳排放模型库，简化了用户的操作，提高了模型的复用性和实用性。"
		],
		projectPerception: ""
	},
	{
		projectDetail: {
			name: "博续科技官网",
			time: "2024.07-2024.08",
			company: "上海博续明观科技有限公司",
			position: "高级前端开发工程师",
		},
		projectIntroduction: "博续公司官网 <a class='link' href='https://www.boxutech.com' target='_blank'>boxutech.com</a>  是一个主要使用 Next.js 和 shadcn/ui 构建的项目。",
		projectResponsibilities: [
			"运用 framer-motion 实现网页动画效果，显著提升用户交互体验。",
			"使用 AI 工具构建网站 SEO 相关内容，提高搜索引擎排名。",
			"运用 react-i18next 进行国际化开发，搭建 Weblate 翻译平台，显著提高网站的翻译效率和质量。",
			"运用 react-pdf 呈现 PDF 文件，结合 react-pageflip 实现 PDF 翻页效果，优化展示体验。",
			"使用 TailwindCSS 实现网站的响应式，以适配用户不同设备。"
		],
		projectPerception: ""
	},
	{
		projectDetail: {
			name: "Planiverse 供应链计划平台",
			time: "2020.04-2024.07",
			company: "上海杉数网络科技有限公司",
			position: "前端开发工程师",
		},
		projectIntroduction: "Planiverse 是一个技术栈为 React + antd 的计划宇宙平台，旨在打造一个用于零售供应商的端到端分析、计划和决策 平台。该平台主要包括智能需求计划 Demand.ai、智能供应计划 Supply.ai、智能履约计划 Fulfill.ai、智能收益管理 Revenue.ai 四部分。",
		projectResponsibilities: [
			"主导项目架构的重构，从单体应用成功迁移到 Monorepo，提高系统的可维护性和扩展性。",
			"二次封装 react-base-table，实现表格的横向和纵向虚拟滚动功能，提升用户界面的交互体验。",
			"开发多个公共组件，其中 antd-spin 已开源，为项目提供了标准化的 UI 组件库。",
			"解决中文数据和阿拉伯数字在项目中出现的规范化问题，开源了 number-zh 系列，确保数据的一致性和准确性。",
			"负责标准化交付的文档，采用 vitepress 搭建在线用户手册，并开源 <a class='link' href='https://github.com/condorheroblog/vitepress-export-pdf' target='_blank'>vitepress-export-pdf</a>，实现文档自动导出为 PDF，提高文档的易用性和分发效率。",
			"开发 <a class='link' href='https://github.com/condorheroblog/vite-plugin-fake-server' target='_blank'>vite-plugin-fake-server</a> 插件，实现前端模拟后端数据服务，显著加快项目开发速度，确保数据的实时性和一致性。"
		],
		projectPerception: ""
	}
];

// 导出 2025-10-29 的简历信息
export const resume_20251029_info: ResumeItemType = {
	basicInfo,
	jobIntention,
	professionalSkills,
	educationExperiences,
	workExperiences,
	projectExperiences,
};

export default resume_20251029_info;
