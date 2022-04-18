import axios, { AxiosInstance, AxiosResponse } from "axios";
import { FrameRequestDTO, FrameResponseDTO } from "interfaces/FrameDTO";
import { KeywordRequestDTO, KeyworResponseDTO } from "interfaces/KeywordDTO";
import MyResultList from "interfaces/MyResultList";
import { MyFile } from "interfaces/MyTypes";
import { TextRequestDTO, TextResponseDTO } from "interfaces/TextDTO";
import {
    TranslationRequestDTO,
    TranslationResponseDTO,
} from "interfaces/TranslationDTO";
/* 테서트를 위한 임포트 */
// import FormData from "form-data";
import { UploadResponseDTO } from "interfaces/UploadDTO";
import { formDataClient, jsonDataClient } from "./DefaultClient";
import MakeFormData from "./MakeFormData";

export default async function sendingFiles(
    files: Array<MyFile>,
    successCallback?:
        | ((value: KeyworResponseDTO) => void | PromiseLike<void>)
        | null
        | undefined,
    failCallback?:
        | ((reason: any) => void | PromiseLike<void>)
        | null
        | undefined,
) {
    const formData = MakeFormData(files);
    try {
        /* upload콜의  Response를 담는 변수 */
        const needTranslationArray: boolean[] = [];
        const videoCode: string[] = [];
        /* frame콜의 Response를 담는 변수 */
        const frameRequest: FrameRequestDTO = { videoCode: [] };
        let frameSet: number[][] = [];
        /* text콜의 Response를 담는 변수 */
        let textArray: string[] = [];
        /* text/translate콜의 Response를 담는 변수 */
        let translatedTextArray: string[] | null = [];
        /* upload 콜  */
        const uploadResponse = await formDataClient.post("/upload", formData);
        const uploadResponseDataArray: UploadResponseDTO[] =
            uploadResponse.data;
        uploadResponseDataArray.forEach(uploadResponseData => {
            needTranslationArray.push(uploadResponseData.needTranslation);
            videoCode.push(uploadResponseData.videoCode);
        });
        frameRequest.videoCode = videoCode;
        /* frames 콜 */
        const frameResponse = await jsonDataClient.post(
            "/frames",
            JSON.stringify(frameRequest),
        );
        const frameResponseData: FrameResponseDTO = frameResponse.data;
        frameSet = frameResponseData.frameSet;
        const textRequest: TextRequestDTO = {
            frameSet,
            videoCode,
        };
        /* text 콜 */
        const textResponse = await jsonDataClient.post(
            "/text",
            JSON.stringify(textRequest),
        );
        const textResponseData: TextResponseDTO = textResponse.data;
        textArray = textResponseData.text;
        const translationRequest: TranslationRequestDTO = {
            text: textArray,
            needTranslation: needTranslationArray,
        };
        /* text/translate콜 */
        const translationResponse = await jsonDataClient.post(
            "/text/translated",
            JSON.stringify(translationRequest),
        );
        const translationResponseData: TranslationResponseDTO =
            translationResponse.data;
        translatedTextArray = translationResponseData.translatedText;
        if (translatedTextArray === null) {
            throw new Error("translatedTextArray is null");
        }
        const keywordRequest: KeywordRequestDTO = {
            translatedText: translatedTextArray,
        };
        /* keywords콜 */
        const keywordsResponse = await jsonDataClient.post(
            "/keywords",
            JSON.stringify(keywordRequest),
        );
        const keywordsResponseData: KeyworResponseDTO = keywordsResponse.data;
        if (typeof successCallback === "function") {
            successCallback(keywordsResponseData);
        }
        // .then(result => {
        //     console.log(result);
        //     console.log(result.data);
        //     if (typeof successCallback === "function") {
        //         successCallback(result);
        //     }
        // });
    } catch (err) {
        console.log(err);
        if (typeof failCallback === "function") failCallback(err);
    }
}
