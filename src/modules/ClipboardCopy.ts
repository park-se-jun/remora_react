export function ClipboardCopyStringArray(
    stringArray: string[],
    separator: string,
) {
    const srcString = stringArray.join(separator);
    navigator.clipboard.writeText(srcString);
}
export function ClipboardCopyString(srcString: string) {
    navigator.clipboard.writeText(srcString);
}
