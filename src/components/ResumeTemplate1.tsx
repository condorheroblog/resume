
// https://www.jianliben.com/editor/?t=tpl101
import { Title } from "./Title";
import { Button } from "./Button";
import type { ResumeInformationType } from "../meta";

interface ResumeTemplate1Props {
	resumeInformation: ResumeInformationType;
}
export function ResumeTemplate1 ({ resumeInformation }: ResumeTemplate1Props) {
	return (
		<section className="w-7/12 max-md:w-full bg-teal-50 px-5 pb-5 rounded-lg print:w-full print:rounded-none print:bg-white print:p-0">
			<div className="print:hidden flex justify-center gap-3 py-4">
				<Button onClick={() => {window.print()}}>导出 / 保存</Button>
				<Button>
					<a href="https://github.com/condorheroblog/resume" target="_blank">Github</a>
				</Button>
			</div>
			<main className="bg-white p-8 shadow-md print:border-none print:shadow-none print:p-4">
				<h1 className="flex justify-center text-3xl text-blue-500 font-bold">{resumeInformation.resumeTitle}</h1>

				<Title title="基本信息" />

				<ul className="grid grid-cols-2 gap-3 py-4 max-sm:grid-cols-1">
					{
						resumeInformation.basicInfo.map((item) => {
							return (
								<li className="flex gap-3 text-slate-600 print:gap-1" key={item.value}>
									{/* <span>
										{
											item.label.split("").map((labelItem, labelIndex) => {
												const len = item.label.split("").length;
												if (len < 4 && labelIndex + 1 !== len ) {
														return <>{labelItem}&#12288;</>
												}
												return labelItem
											})
										}：
									</span> */}
									{item.label}

									{
										item.link
										?
										<a
											className="print:text-sm max-md:text-sm underline underline-offset-4 text-blue-500 hover:text-blue-700"
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

				<ul className="flex justify-between py-4 max-sm:flex-col">
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

				<Title title="工作经历" />

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

				<div className="flex flex-col gap-3 py-4">
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
										<b>项目简介：</b>
										{projectItem.projectIntroduction}
									</li>
									<li>
										<b>职责：</b>
										{projectItem.projectResponsibilities.map((dutyItem) => dutyItem)}
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
		</section>
	);
}
