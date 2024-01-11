import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";


import type { ResumeInformationType } from "../meta";

interface JsonEditorProps {
	resumeInformation: ResumeInformationType;
	setResumeInformation: (a: ResumeInformationType) => void;
}
export function JsonEditor ({ resumeInformation, setResumeInformation }: JsonEditorProps) {
	return (
		<div className="print:hidden rounded-lg border p-4 w-5/12 max-md:w-full" >
			<JsonView
				editable
				collapsed={false}
				onAdd={params => {
					console.log('[jv onAdd]', params);
					// setResumeInformation({ ...params.src });
				}}
				onEdit={params => {
					console.log('[jv onEdit]', params);
					setResumeInformation({ ...params.src });
				}}
				onDelete={params => {
					console.log('[jv onDelete]', params);
					setResumeInformation({ ...params.src });
				}}
				src={resumeInformation}
			/>
		</div>
	);
}
