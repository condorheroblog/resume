import { useMemo } from "react";

// https://www.jianliben.com/editor/?t=tpl101
import { Title } from "./Title";
import type { ResumeInformationType } from "../meta";
import { isChinese } from "../utils";

interface ResumeTemplate2Props {
	resumeInformation: ResumeInformationType;
}
export function ResumeTemplate2 ({ resumeInformation }: ResumeTemplate2Props) {

	const maxStringLength = useMemo(() => {
		return resumeInformation.basicInfo.reduce((l, basicInfoItem) => {
			if(isChinese(basicInfoItem.label) && basicInfoItem.label.length > l) {
				return basicInfoItem.label.length;
			}
			return l;
		}, 4);
	}, [resumeInformation.basicInfo]);

	return (
		<main className="bg-white p-8 max-md:p-4 shadow-md print:border-none print:shadow-none print:p-4">
			<h1 className="flex justify-center text-3xl text-blue-500 font-bold pb-5">{resumeInformation.resumeTitle}</h1>

			<Title title="基本信息" template={2} />

			<ul className="grid grid-cols-2 gap-3 py-4 max-sm:grid-cols-1">
				{
					resumeInformation.basicInfo.map((item) => {
						return (
							<li className="flex gap-3 text-slate-600 print:gap-1" key={item.value}>
								<span>
									{
										item.label.split("").map((labelItem, labelIndex) => {
											const len = item.label.split("").length;
											if (len < maxStringLength && labelIndex + 1 !== len ) {
													return <b key={labelIndex}>{labelItem}&#12288;</b>
											}
											return <b key={labelIndex}>{labelItem}</b>
										})
									}：
								</span>

								{
									item.link
									?
									<a
										className="print:text-sm max-md:text-sm link"
										href={`https://${item.value}`} target="_blank"
									>
									{item.value}
									</a>
									:
									<span>{item.value}</span>
								}

							</li>
						);
					})
				}
			</ul>

			<Title title="求职意向" template={2} />

			<ul className="flex justify-between py-4 max-sm:flex-col max-md:flex-col max-lg:flex-col print:grid print:grid-cols-2">
				{
					resumeInformation.jobIntention.map((jobItem) => {
						return (
							<li className="flex" key={jobItem.value}>
								<span>➢ {jobItem.label}：</span>
								<span>{jobItem.value}</span>
							</li>
						);
					})
				}
			</ul>

			<Title title="工作经历" template={2} />

			<ul className="flex flex-col gap-4 py-4">
				{
					resumeInformation.workExperiences.map((workItem) => {
						return (
							<li className="flex justify-between max-sm:flex-col" key={workItem.time}>
								<span><span className="hidden max-sm:inline">➢ 时间：</span>{workItem.time}</span>
								<span><span className="hidden max-sm:inline">➢ 公司：</span>{workItem.company}</span>
								<span><span className="hidden max-sm:inline">➢ 岗位：</span>{workItem.post}</span>
							</li>
						);
					})
				}
			</ul>

			<Title title="专业技能" template={2} />

			<ul className="flex flex-col gap-3 py-4 list-disc list-inside">
				{
					resumeInformation.professionalSkills.map((skillItem) => {
						return (
							<li key={skillItem}>{skillItem}</li>
						);
					})
				}
			</ul>

			<Title title="项目经历" template={2} />

			<div className="flex flex-col gap-10 py-4">
				{
					resumeInformation.projectExperiences.map((projectItem) => {
						return (
							<ul className="flex flex-col gap-3" key={projectItem.projectName.time}>
								<li className="flex justify-between max-sm:flex-col">
									<span><span className="hidden max-sm:inline">➢ 时间：</span>{projectItem.projectName.time}</span>
									<span><span className="hidden max-sm:inline">➢ 公司：</span>{projectItem.projectName.company}</span>
									<span><span className="hidden max-sm:inline">➢ 岗位：</span>{projectItem.projectName.post}</span>
								</li>
								<li>
									<b>项目背景：</b>
									{projectItem.projectIntroduction}
								</li>
								<li>
									<b>职责：</b>
									<span dangerouslySetInnerHTML={{ __html: projectItem.projectResponsibilities }}></span>
								</li>
								<li>
									<b>项目心得：</b>
									{projectItem.projectPerception}
								</li>
							</ul>
						);
					})
				}
			</div>

		</main>
	);
}
