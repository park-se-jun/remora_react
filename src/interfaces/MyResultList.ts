import { KeyworResponseDTO } from "./KeywordDTO";
import { MyResult } from "./MyTypes";

export default class MyResultList {
    private resultList!: MyResult[];

    constructor(resultDTO: KeyworResponseDTO) {
        if (resultDTO.translatedText && resultDTO.keywords) {
            this.resultList = [];
            const length = resultDTO.translatedText?.length;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < length; i++) {
                this.resultList.push({
                    keywords: resultDTO.keywords[i],
                    text: resultDTO.translatedText[i],
                });
            }
        }
    }

    public getResultList() {
        return this.resultList;
    }

    public getLength() {
        return this.resultList.length;
    }

    public getKeywordsOf(index: number): string {
        const { keywords } = this.resultList[index];
        return keywords.join(", ");
    }

    public getTextOf(index: number): string {
        const { text } = this.resultList[index];
        return text;
    }

    public getContentOf(index: number): string {
        return `keywords : ${this.getKeywordsOf(index)}
text: ${this.getTextOf(index)}`;
    }
}
