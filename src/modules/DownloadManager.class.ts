import { MyResult } from "interfaces/MyTypes";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import MyResultList from "interfaces/MyResultList";

export default class DownloadManager {
    private targetResultList: MyResultList;

    private zip: JSZip;

    constructor(targetResultList: MyResultList) {
        this.targetResultList = targetResultList;
        this.zip = new JSZip();
    }

    private downloadZip() {
        this.zip.generateAsync({ type: "blob" }).then(content => {
            saveAs(content, "결과물.zip");
        });
    }

    private cleanZip() {
        this.zip = new JSZip();
    }

    private addFileInZip(index: number) {
        const targetText = this.targetResultList.getContentOf(index);
        const targetFileName = `${this.targetResultList.getKeywordsOf(
            index,
        )}.txt`;
        this.zip.file(targetFileName, targetText);
    }

    public downloadTheContent(index: number) {
        this.cleanZip();
        this.addFileInZip(index);
        this.downloadZip();
    }

    public downloadAllContent() {
        this.cleanZip();
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < this.targetResultList.getLength(); i++) {
            this.addFileInZip(i);
        }
        this.downloadZip();
    }
}
