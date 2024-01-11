const chineseRegex = /[\u4e00-\u9fa5]/;

export function isChinese(str: string) {
	return chineseRegex.test(str);
}
