import { useState } from "react";

import { JsonEditor } from "./JsonEditor.tsx";
import { ResumeContainer } from "./ResumeContainer.tsx";
import { resumeInformation as RESUME_INFORMATION } from "../meta";


export function Container () {
	const [resumeInformation, setResumeInformation] = useState(RESUME_INFORMATION);
	return (
		<section className="flex justify-between gap-8 max-md:flex-col p-8 max-md:p-4 print:p-0 h-screen overflow-auto max-md:h-full">
			<ResumeContainer resumeInformation={resumeInformation}/>
			<JsonEditor resumeInformation={resumeInformation} setResumeInformation={setResumeInformation} />
		</section>
	);
}
