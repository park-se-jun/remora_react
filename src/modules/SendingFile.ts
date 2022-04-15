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
export class SendingManager {
    private myResultList: MyResultList | null;

    private formData: FormData;

    private uploadResponseArray!: UploadResponseDTO[];

    private needTranslationArray!: boolean[];

    private videoCodeArray: string[];

    private frameRequestDTO!: FrameRequestDTO;

    private frameResponseDTO!: FrameResponseDTO;

    private textRequestDTO!: TextRequestDTO;

    private textResponseDTO!: TextResponseDTO;

    private translationRequestDTO!: TranslationRequestDTO;

    private translationResponseDTO!: TranslationResponseDTO;

    private keywordRequestDTO!: KeywordRequestDTO;

    private keywordResponseDTO!: KeyworResponseDTO;

    private formDataAxiosInstance: AxiosInstance;

    private jsonDataAxiosInstance: AxiosInstance;

    private progressCallback: (value: number) => void;

    constructor(files: MyFile[]) {
        this.formData = MakeFormData(files);
        this.formDataAxiosInstance = formDataClient;
        this.jsonDataAxiosInstance = jsonDataClient;
        this.needTranslationArray = [];
        this.videoCodeArray = [];
        this.myResultList = null;
        this.progressCallback = (value: number) => {
            console.log(value);
        };
    }

    private static nullCheck(member: unknown) {
        if (member) {
            return null;
        }
        throw new Error("null data in API Calls");
    }

    private setNeedTranslationArray(uploadResponseArray: UploadResponseDTO[]) {
        uploadResponseArray.forEach(uploadResponse => {
            this.needTranslationArray.push(uploadResponse.needTranslation);
        });
        return this.needTranslationArray;
    }

    private setVideoCodeArray(uploadResponseArray: UploadResponseDTO[]) {
        uploadResponseArray.forEach(uploadResponse => {
            this.videoCodeArray.push(uploadResponse.videoCode);
        });
        return this.videoCodeArray;
    }

    public setProgressCallback(myCallback: (value: number) => void) {
        this.progressCallback = myCallback;
    }

    async sendingDataAPI(formData: FormData) {
        await this.uploadAPI(formData);
        this.progressCallback(20);
        await this.frameAPI(this.frameRequestDTO);
        this.progressCallback(40);
        await this.textAPI(this.textRequestDTO);
        this.progressCallback(60);
        await this.translationAPI(this.translationRequestDTO);
        this.progressCallback(80);
        await this.keywordAPI(this.keywordRequestDTO);
        this.progressCallback(100);
        await this.makeMyResultList(this.keywordResponseDTO);
    }

    async uploadAPI(formData: FormData) {
        const response = await this.formDataAxiosInstance.post(
            "/upload",
            formData,
        );
        this.uploadResponseArray = response.data;
        this.setNeedTranslationArray(this.uploadResponseArray);
        this.setVideoCodeArray(this.uploadResponseArray);
        this.frameRequestDTO = {
            videoCode: this.videoCodeArray,
        };
        return this.frameRequestDTO;
    }

    async frameAPI(frameRequest: FrameRequestDTO) {
        const response = await this.jsonDataAxiosInstance.post(
            "/frames",
            JSON.stringify(frameRequest),
        );
        this.frameResponseDTO = response.data;
        this.textRequestDTO = {
            frameSet: this.frameResponseDTO.frameSet,
            videoCode: this.frameResponseDTO.videoCode,
        };
        return this.textRequestDTO;
    }

    async textAPI(textRequest: TextRequestDTO) {
        const response = await this.jsonDataAxiosInstance.post(
            "/text",
            JSON.stringify(textRequest),
        );
        this.textResponseDTO = response.data;
        this.translationRequestDTO = {
            needTranslation: this.needTranslationArray,
            text: this.textResponseDTO.text,
        };
        return this.translationRequestDTO;
    }

    async translationAPI(translationRequest: TranslationRequestDTO) {
        const response = await this.jsonDataAxiosInstance.post(
            "/text/translated",
            JSON.stringify(translationRequest),
        );
        this.translationResponseDTO = response.data;
        this.keywordRequestDTO = {
            translatedText: this.translationResponseDTO.translatedText,
        };
        return this.keywordRequestDTO;
    }

    async keywordAPI(keywordRequest: KeywordRequestDTO) {
        const response = await this.jsonDataAxiosInstance.post(
            "/keywords",
            JSON.stringify(keywordRequest),
        );
        this.keywordResponseDTO = response.data;
        return this.keywordResponseDTO;
    }

    makeMyResultList(keywordResponse: KeyworResponseDTO): MyResultList {
        this.myResultList = new MyResultList(keywordResponse);
        return this.myResultList;
    }
}
