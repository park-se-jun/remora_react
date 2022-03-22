import { MyResult } from "interfaces/MyTypes";

const mock1: Array<MyResult> = [
    {
        success: true,
        message: "Remora Project",
        code: 1,
        originResultText: ["안녕하세요", "좋은날입니다"],
        translatedResultText: ["hello", "is Good day"],
        keywords: ["인삿말"],
        needTranslation: true,
    },
    {
        success: true,
        message: "Remora Project",
        code: 2,
        originResultText: ["Good", "Day"],
        translatedResultText: ["Remora", "is Good"],
        keywords: ["Hello"],
        needTranslation: false,
    },
];
export default mock1;
