import { MyFile } from "interfaces/MyTypes";
import SendingManager from "modules/SendingManager.class";

const upload = "upload API 테스트";
const frame = "frame API 테스트";
const text = "text API 테스트";
const translate = "translation API 테스트";
const keyword = "keywords API 테스트";

class TestSendingManager extends SendingManager {}

describe("SendingManager 테스트", () => {
    const dummyImageFile: MyFile = new File();

    const dummyVideoFile = new File();
    const dummyPdfFile = new File();
    const mockMyFiles: MyFile[] = [{}];
    let myTestSendingManager = new TestSendingManager();
    /** upload 테스트 */
    test(`${upload}:동영상1개 전송`);
    test(`${upload}:동영상2개 전송`);
    test(`${upload}:이미지 전송`);
    test(`${upload}:pdf 전송`);
    test(`${upload}:동영상1개 + 이미지 전송`);
    /**  frame테스트 */
    test(`${frame}:number 배열 전송`);
    test(`${frame}:number 배열 전송`);
    /** text 테스트 */
    test(`${test}:frameSet전달`);
    /** translate 테스트 */
    test(`${translate}:한글 1개 전달 translate`);
    test(`${translate}:한글 1개 전달 not translate`);
    test(`${translate}:영어 1개 전달 translate`);
    test(`${translate}:영어 1개 전달 not translate`);
    test(`${translate}:알 수 없는 문자열 1개 전달 translate`);
    test(`${translate}:알 수 없는 문자열 1개 전달 not translate`);
    test(`${translate}:영어 한글 알수 없는 문자열 전달 translate`);
    test(`${translate}:영어 한글 알수 없는 문자열 전달 not translate`);
    /** keyword 테스트 */
    test(`${keyword}: 키워드 1개 전달`);
    test(`${keyword}: 키워드 2개 전달`);
    test(`${keyword}: 키워드 3개 전달`);
    /** makeMyResultList 테스트 */
    test("makeMyResultList 테스트");
    /** E2E 테스트 */
    test("ALL API 테스트");
});
