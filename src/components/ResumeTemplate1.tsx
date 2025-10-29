import { useMemo } from "react";

import { Title } from "./Title";
import type { ResumeItemType } from "../meta";
import { isChinese } from "../utils";
import { resumeTitle } from "../meta";

interface ResumeTemplate1Props {
	resumeInformation: ResumeItemType;
}
export function ResumeTemplate1 ({ resumeInformation }: ResumeTemplate1Props) {

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
			<h1 className="flex justify-center text-3xl text-blue-500 font-bold pb-5">
				{resumeTitle}
			</h1>

			<Title title="基本信息" />

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

			<Title title="求职意向" />

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

			{resumeInformation.educationExperiences && (
				<>
					<Title title="教育经历" />
					
					<ul className="flex flex-col gap-4 py-4">
						{
							resumeInformation.educationExperiences.map((eduItem) => {
								return (
									<li className="flex justify-between max-sm:flex-col" key={eduItem.time}>
										<span><span className="hidden max-sm:inline">➢ 学校：</span>{eduItem.school}</span>
										<span><span className="hidden max-sm:inline">➢ 学历：</span>{eduItem.degree}</span>
										<span><span className="hidden max-sm:inline">➢ 专业：</span>{eduItem.major}</span>
										<span><span className="hidden max-sm:inline">➢ 时间：</span>{eduItem.time}</span>
									</li>
								);
							})
						}
					</ul>
				</>
			)}

			<Title title="工作经历" />

			<ul className="flex flex-col gap-4 py-4">
				{
					resumeInformation.workExperiences.map((workItem) => {
						return (
							<li className="flex justify-between max-sm:flex-col" key={workItem.time}>
								<span><span className="hidden max-sm:inline">➢ 公司：</span>{workItem.company}</span>
								<span><span className="hidden max-sm:inline">➢ 岗位：</span>{workItem.position}</span>
								<span><span className="hidden max-sm:inline">➢ 时间：</span>{workItem.time}</span>
							</li>
						);
					})
				}
			</ul>

			<Title title="专业技能" />

			<ul className="flex flex-col gap-3 py-4 list-disc list-inside">
				{
					resumeInformation.professionalSkills.map((skillItem) => {
						return (
							<li key={skillItem}>{skillItem}</li>
						);
					})
				}
			</ul>

			<Title title="项目经历" />

			<div className="flex flex-col gap-10 py-4">
				{
					resumeInformation.projectExperiences.map((projectItem) => {
						return (
							<ul className="flex flex-col gap-3" key={projectItem.projectDetail.time}>
								<li className="flex justify-between max-sm:flex-col">
									{projectItem.projectDetail.name && (
										<span className="font-bold"><span className="hidden max-sm:inline">➢ 项目：</span>{projectItem.projectDetail.name}</span>
									)}
									{projectItem.projectDetail.company && (
										<span><span className="hidden max-sm:inline">➢ 公司：</span>{projectItem.projectDetail.company}</span>
									)}
									{projectItem.projectDetail.position && (
										<span><span className="hidden max-sm:inline">➢ 岗位：</span>{projectItem.projectDetail.position}</span>
									)}
									{projectItem.projectDetail.time && (
										<span><span className="hidden max-sm:inline">➢ 时间：</span>{projectItem.projectDetail.time}</span>
									)}
								</li>
								<li>
									<b>项目背景：</b>
									<span dangerouslySetInnerHTML={{ __html: projectItem.projectIntroduction || "" }} />
								</li>
								<li>
									<b>职责：</b>
									<ul className="list-disc list-inside">
										{
											projectItem.projectResponsibilities?.map((responsibilityItem) => {
												return (
													<li key={responsibilityItem} dangerouslySetInnerHTML={{ __html: responsibilityItem }}></li>
												);
											})
										}
									</ul>
								</li>
								{projectItem.projectPerception && (
									<li>
										<b>项目心得：</b>
										{projectItem.projectPerception}
									</li>
								)}
							</ul>
						);
					})
				}
			</div>

		</main>
	);
}
