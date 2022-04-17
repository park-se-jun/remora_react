import { MyResult } from "interfaces/MyTypes";
import fs from "fs";

// export const mock1: Array<MyResult> = [
//     {
//         success: true,
//         message: "Remora Project",
//         code: 1,
//         originResultText: ["안녕하세요", "좋은날입니다"],
//         translatedResultText: ["hello", "is Good day"],
//         keywords: ["인삿말"],
//         needTranslation: true,
//     },
//     {
//         success: true,
//         message: "Remora Project",
//         code: 2,
//         originResultText: ["Good", "Day"],
//         translatedResultText: ["Remora", "is Good"],
//         keywords: ["Hello"],
//         needTranslation: false,
//     },
// ];
const videoData = fs.readFileSync("./exampleData/Remora_example_1_360.mp4");
console.log(videoData);

export const mockImageFile = new File([""], "mockImage.jpg", {
    type: "image/jpg",
});
export const mockVideoFile = new File([""], "mockVideo.mp4", {
    type: "video/mp4",
});
export const mockPdfFile = new File([""], "mockPdfFile", {
    type: "application/pdf",
});
console.log(mockImageFile);
