import { MyResult } from "interfaces/MyTypes";

function DownloadFile(myResult: MyResult) {
    const json = JSON.stringify(myResult);
    const blob = new Blob([json], { type: "octet/stream" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${myResult.videoCode}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
}
function DownloadFiles(myResult: MyResult[]) {}

export default DownloadFile;
