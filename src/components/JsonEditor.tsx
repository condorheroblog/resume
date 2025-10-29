import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";


import type { ResumeItemType } from "../meta";

interface JsonEditorProps {
	resumeInformation: ResumeItemType;
	setResumeInformation: (a: ResumeItemType) => void;
	selectedResumeKey: string;
}
export function JsonEditor ({ resumeInformation, setResumeInformation, selectedResumeKey }: JsonEditorProps) {
	return (
		<div className="print:hidden rounded-lg border p-4 w-5/12 max-lg:w-full overflow-auto" >
			<div className="mb-3 text-sm text-gray-600">
				当前编辑: <span className="font-medium">{selectedResumeKey}</span>
			</div>
			<JsonView
				collapseStringsAfterLength={99999999999999}
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
