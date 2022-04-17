import { FrameRequestDTO } from "interfaces/FrameDTO";
// import { MyFile } from "interfaces/MyTypes";
import MakeFormData from "modules/MakeFormData";
import SendingManager from "modules/SendingManager.class";
import fs from "fs";
import FormData from "form-data";
import MyResultList from "interfaces/MyResultList";
import { Result } from "components/pages";

const upload = "upload API 테스트";
const frame = "frame API 테스트";
const text = "text API 테스트";
const translate = "translation API 테스트";
const keyword = "keywords API 테스트";
// 테스트 진입시 시작 videoCode
const videoCode = 44;
describe.skip("upload API 테스트", () => {
    const myTestSendingManager = new SendingManager(MakeFormData([]));
    /** upload 테스트 */
    test(`${upload}:동영상1개 전송`, async () => {
        const data = new FormData();
        data.append(
            "originVideo",
            fs.createReadStream("./exampleData/Remora_example_1_360.mp4"),
        );
        data.append("needTranslate", "true");
        const result: FrameRequestDTO =
            await myTestSendingManager.testUploadAPI(data);
        expect(result).toEqual({ videoCode: [`${videoCode}`] });
    }, 99999);

    test(`${upload}:동영상2개 전송`, async () => {
        const data = new FormData();
        data.append(
            "originVideo",
            fs.createReadStream("./exampleData/Remora_example_1_360.mp4"),
        );
        data.append("needTranslate", "true");
        data.append(
            "originVideo",
            fs.createReadStream("./exampleData/Remora_example_3_360.mp4"),
        );
        data.append("needTranslate", "false");
        const result: FrameRequestDTO =
            await myTestSendingManager.testUploadAPI(data);
        expect(result).toEqual({
            videoCode: [`${videoCode + 1}`, `${videoCode + 2}`],
        });
    }, 99999);

    test(`${upload}:이미지 전송`, async () => {
        const data = new FormData();
        data.append(
            "originVideo",
            fs.createReadStream("./exampleData/Remora_example_image.jpg"),
        );
        data.append("needTranslate", "true");
        const result: FrameRequestDTO =
            await myTestSendingManager.testUploadAPI(data);
        expect(result).toEqual({ videoCode: ["-1"] });
    }, 99999);
    test(`${upload}:pdf 전송`, async () => {
        const data = new FormData();
        data.append(
            "originVideo",
            fs.createReadStream("./exampleData/Remora_example_pdf.pdf"),
        );
        data.append("needTranslate", "true");
        const result: FrameRequestDTO =
            await myTestSendingManager.testUploadAPI(data);
        expect(result).toEqual({ videoCode: ["-1"] });
    }, 99999);
    test(`${upload}:동영상1개 + 이미지 전송`, async () => {
        const data = new FormData();
        data.append(
            "originVideo",
            fs.createReadStream("./exampleData/Remora_example_1_360.mp4"),
        );
        data.append("needTranslate", "true");
        data.append(
            "originVideo",
            fs.createReadStream("./exampleData/Remora_example_image.jpg"),
        );
        data.append("needTranslate", "false");
        const result: FrameRequestDTO =
            await myTestSendingManager.testUploadAPI(data);
        expect(result).toEqual({
            videoCode: [`${videoCode + 3}`, "-1"],
        });
    }, 99999);
});
describe.skip(`frame API 테스트`, () => {
    const myTestSendingManager = new SendingManager(MakeFormData([]));
    /**  frame테스트 */
    test(`${frame}:videoCode 배열 1개 전송`, async () => {
        const result = await myTestSendingManager.testFrameAPI({
            videoCode: ["1"],
        });
        expect(result).toEqual({
            frameSet: [
                [
                    0, 300, 150, 600, 450, 750, 900, 1050, 1200, 1500, 1350,
                    1800, 1650, 2100, 2400, 1950, 2250, 2700, 2550, 3000, 2850,
                    3300, 3150, 3600, 3450, 3750,
                ],
            ],
            videoCode: ["1"],
        });
    }, 99999);
    test(`${frame}: videoCode 배열 2개 전송`, async () => {
        const result = await myTestSendingManager.testFrameAPI({
            videoCode: ["1", "2"],
        });
        expect(result).toEqual({
            frameSet: [
                [
                    0, 300, 150, 600, 450, 750, 900, 1200, 1050, 1500, 1350,
                    1800, 1650, 2100, 2400, 1950, 2250, 2700, 2550, 3000, 2850,
                    3300, 3150, 3600, 3450, 3750,
                ],
                [
                    0, 300, 150, 600, 450, 900, 750, 1200, 1050, 1500, 1350,
                    1800, 1650, 2100, 2400, 1950, 2250, 2700, 2550, 3000, 2850,
                    3300, 3150, 3600, 3900, 3450, 3750,
                ],
            ],
            videoCode: ["1", "2"],
        });
    }, 99999);
    test(`${frame}: 잘못된 videoCode 전송`, async () => {
        const result = await myTestSendingManager.testFrameAPI({
            videoCode: ["-1"],
        });
        expect(result).toEqual({
            frameSet: null,
            videoCode: null,
        });
    }, 99999);
});
describe(`text API 테스트`, () => {
    const myTestSendingManager = new SendingManager(MakeFormData([]));
    // /** text 테스트 */
    test(`${text}:frameSet전달`, async () => {
        const result = await myTestSendingManager.testTextAPI({
            frameSet: [
                [
                    0, 300, 150, 600, 450, 750, 900, 1050, 1200, 1500, 1350,
                    1800, 1650, 2100, 2400, 1950, 2250, 2700, 2550, 3000, 2850,
                    3300, 3150, 3600, 3450, 3750,
                ],
            ],
            videoCode: ["1"],
        });
        expect(result).toEqual({
            text: ["test ocr result\n"],
            needTranslation: [true],
        });
    });

    test(`${text}:null,null 전달 -> error 반환`, async () => {
        const result = await myTestSendingManager.testTextAPI({
            frameSet: null,
            videoCode: null,
        });
    });
    expect(Result).toThrowError("400");
});
describe.skip(`translation API 테스트`, () => {
    const myTestSendingManager = new SendingManager(MakeFormData([]));
    // /** translate 테스트 */
    test(`${translate}:영어,영어 전달 => 번역O,번역X [expect] : 한글 영어`, async () => {
        const result = await myTestSendingManager.testTranslationAPI({
            text: ["hello My name is Sejun", "This is an apple"],
            needTranslation: [true, false],
        });
        expect(result).toEqual({
            translatedText: [
                "안녕하세요 제 이름은 세준입니다.",
                "This is an apple",
            ],
        });
    }, 99999);
    test(`${translate}:한글 한글 전달/ 번역O,번역X [expect] : 한글 한글`, async () => {
        const result = await myTestSendingManager.testTranslationAPI({
            text: [
                "처음뵙겠습니다. 저는 AAA 입니다.",
                "아버지가 방에 들어가신다.",
            ],
            needTranslation: [true, true],
        });
        expect(result).toEqual({
            translatedText: [
                "처음뵙겠습니다. 저는 aaa 입니다.",
                "아버지가 방에 들어가신다.",
            ],
        });
    }, 99999);
    test(`${translate}:이상한 문자열 전달 [expect] : 테스트로 보낸 결과`, async () => {
        const result = await myTestSendingManager.testTranslationAPI({
            text: ["asdgaedafsd", "ㅁㄷㅁㅇㄻㄴㅇ"],
            needTranslation: [true, false],
        });
        expect(result).toEqual({
            translatedText: ["as gaedafsd로", "ㅁㄷㅁㅇㄻㄴㅇ"],
        });
    }, 99999);

    // test(`${translate}:영어 1개 전달 not translate`);
    // test(`${translate}:알 수 없는 문자열 1개 전달 translate`);
    // test(`${translate}:알 수 없는 문자열 1개 전달 not translate`);
    // test(`${translate}:영어 한글 알수 없는 문자열 전달 translate`);
    // test(`${translate}:영어 한글 알수 없는 문자열 전달 not translate`);
});
describe(`${keyword}`, () => {
    // 1개라도 이상하면 success가 false 됨
    // /** keyword 테스트 */
    const myTestSendingManager = new SendingManager(MakeFormData([]));

    test(`${keyword}: 정상 키워드1개 전달 [expect] : 정상결과`, async () => {
        const result = await myTestSendingManager.testKeywordAPI({
            translatedText: ["안녕하세요"],
        });
        expect(result).toEqual({
            success: true,
            message: "Success",
            translatedText: ["안녕하세요"],
            keywords: [["test classification result"]],
        });
    });
    test(`${keyword}: 정상 키워드3개 전달 [expect] : 정상결과`, async () => {
        const result = await myTestSendingManager.testKeywordAPI({
            translatedText: ["hello", "안녕하세요", "good"],
        });
        expect(result).toEqual({
            success: true,
            message: "Success",
            translatedText: ["hello", "안녕하세요", "good"],
            keywords: [
                ["test classification result"],
                ["test classification result"],
                ["test classification result"],
            ],
        });
    });
    test(`${keyword}: 숫자만 전달`, async () => {
        const result = await myTestSendingManager.testKeywordAPI({
            translatedText: ["1111", "111111", "111111"],
        });
        expect(result).toEqual({
            success: false,
            message: "Language(UNK) is not supported",
            translatedText: null,
            keywords: null,
        });
    });
    test(`${keyword}: 알수없는 영어 전달`, async () => {
        const result = await myTestSendingManager.testKeywordAPI({
            translatedText: ["fasdfasdf", "feasdcegt"],
        });
        expect(result).toEqual({
            success: false,
            message: "Language(DE) is not supported",
            translatedText: null,
            keywords: null,
        });
    });
    test(`${keyword}: 정상 키워드와 숫자만 전달`, async () => {
        const result = await myTestSendingManager.testKeywordAPI({
            translatedText: ["안녕하세요", "11111"],
        });
        expect(result).toEqual({
            success: false,
            message: "Language(UNK) is not supported",
            translatedText: null,
            keywords: null,
        });
    });
});

describe("makeMyResultList 테스트", () => {
    const myTestSendingManager = new SendingManager(MakeFormData([]));
    // /** makeMyResultList 테스트 */
    const testResutList: MyResultList =
        myTestSendingManager.testMakeMyResultList({
            success: true,
            message: "Success",
            translatedText: ["hello", "안녕하세요", "good"],
            keywords: [
                ["test classification 1", "123"],
                ["test classification 2"],
                ["test classification 3"],
            ],
        });
    // describe("makeMyResultList 테스트: 정상 keywordResponse", () => {
    test("getKeywordsOf 테스트", () => {
        expect(testResutList.getLength()).toEqual(3);
        expect(testResutList.getKeywordsOf(0)).toEqual(
            "test classification 1, 123",
        );
        expect(testResutList.getKeywordsOf(1)).toEqual("test classification 2");
        expect(testResutList.getKeywordsOf(2)).toEqual("test classification 3");
    });
    test("getTextOf 테스트", () => {
        expect(testResutList.getTextOf(0)).toEqual("hello");
        expect(testResutList.getTextOf(1)).toEqual("안녕하세요");
        expect(testResutList.getTextOf(2));
        expect(testResutList.getTextOf(3)).toThrowError("out");
    });
    // });
    test("makeMyResultList 테스트: 잘못된 keywordResponse");
});
describe("E2E 테스트", () => {
    // /** E2E 테스트 */
    // test("ALL API 테스트");
});
