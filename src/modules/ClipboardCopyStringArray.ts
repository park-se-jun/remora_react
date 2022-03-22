export default function ClipboardCopyStringArray(
    stringArray: string[],
    separator: string,
) {
    const srcString = stringArray.join(separator);
    navigator.clipboard.writeText(srcString);
}
