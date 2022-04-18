import { AxiosInstance } from "axios";
// import FormData from "form-data"; // [테스트] 를 위한 임포트
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

export default class SendingManager {
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

    constructor(formData: FormData) {
        this.formData = formData;
        this.formDataAxiosInstance = formDataClient;
        this.jsonDataAxiosInstance = jsonDataClient;
        this.needTranslationArray = [];
        this.videoCodeArray = [];
        this.myResultList = null;
        this.progressCallback = (value: number) => {
            console.log(value);
        };
    }

    private setNeedTranslationArray(uploadResponseArray: UploadResponseDTO[]) {
        this.needTranslationArray = [];
        uploadResponseArray.forEach(uploadResponse => {
            this.needTranslationArray.push(uploadResponse.needTranslation);
        });
        return this.needTranslationArray;
    }

    private setVideoCodeArray(uploadResponseArray: UploadResponseDTO[]) {
        this.videoCodeArray = [];
        uploadResponseArray.forEach(uploadResponse => {
            this.videoCodeArray.push(uploadResponse.videoCode);
        });
        return this.videoCodeArray;
    }

    public setProgressCallback(myCallback: (value: number) => void) {
        this.progressCallback = myCallback;
    }

    public async sendingDataAPI() {
        await this.uploadAPI();
        this.progressCallback(20);
        await this.frameAPI();
        this.progressCallback(40);
        await this.textAPI();
        this.progressCallback(60);
        await this.translationAPI();
        this.progressCallback(80);
        await this.keywordAPI();
        this.progressCallback(100);
        const value = await this.makeMyResultList(this.keywordResponseDTO);
        return value;
    }

    private async uploadAPI() {
        const response = await this.formDataAxiosInstance.post(
            "/upload",
            this.formData,
            // { headers: this.formData.getHeaders() }, // node 환경에서 [테스트] 할 경우에만 사용
        );
        this.uploadResponseArray = response.data;
        this.setNeedTranslationArray(this.uploadResponseArray);
        this.setVideoCodeArray(this.uploadResponseArray);
        this.frameRequestDTO = {
            videoCode: this.videoCodeArray,
        };
        return this.frameRequestDTO;
    }

    private async frameAPI() {
        const response = await this.jsonDataAxiosInstance.post(
            "/frames",
            JSON.stringify(this.frameRequestDTO),
        );
        this.frameResponseDTO = response.data;

        this.textRequestDTO = {
            frameSet: this.frameResponseDTO.frameSet,
            videoCode: this.frameResponseDTO.videoCode,
        };
        return this.textRequestDTO;
    }

    private async textAPI() {
        const response = await this.jsonDataAxiosInstance.post(
            "/text",
            JSON.stringify(this.textRequestDTO),
        );
        this.textResponseDTO = response.data;
        this.translationRequestDTO = {
            needTranslation: this.needTranslationArray,
            text: this.textResponseDTO.text,
        };
        return this.translationRequestDTO;
    }

    private async translationAPI() {
        const response = await this.jsonDataAxiosInstance.post(
            "/text/translated",
            JSON.stringify(this.translationRequestDTO),
        );
        this.translationResponseDTO = response.data;
        this.keywordRequestDTO = {
            translatedText: this.translationResponseDTO.translatedText,
        };
        return this.keywordRequestDTO;
    }

    private async keywordAPI() {
        const response = await this.jsonDataAxiosInstance.post(
            "/keywords",
            JSON.stringify(this.keywordRequestDTO),
        );
        this.keywordResponseDTO = response.data;
        return this.keywordResponseDTO;
    }

    makeMyResultList(keywordResponse: KeyworResponseDTO): MyResultList {
        this.myResultList = new MyResultList(keywordResponse);
        return this.myResultList;
    }

    /** test 를 위한 method */

    public testUploadAPI(input: FormData) {
        this.formData = input;
        return this.uploadAPI();
    }

    public testFrameAPI(input: FrameRequestDTO) {
        this.frameRequestDTO = input;
        return this.frameAPI();
    }

    public testTextAPI(input: TextRequestDTO) {
        if (input.videoCode === null) {
            this.needTranslationArray = [];
        } else {
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < input.videoCode?.length; i++) {
                this.needTranslationArray.push(true);
            }
        }

        this.textRequestDTO = input;

        return this.textAPI();
    }

    public testTranslationAPI(input: TranslationRequestDTO) {
        this.translationRequestDTO = input;
        return this.translationAPI();
    }

    public testKeywordAPI(input: KeywordRequestDTO) {
        this.keywordRequestDTO = input;
        return this.keywordAPI();
    }

    public testMakeMyResultList(input: KeyworResponseDTO) {
        return this.makeMyResultList(input);
    }

    public async testSendingAPI(videoCode: number) {
        await this.uploadAPI();
        this.progressCallback(20);
        await this.testFrameAPI({ videoCode: [`${(videoCode % 3) + 1}`] });
        this.progressCallback(40);
        await this.textAPI();
        this.progressCallback(60);
        await this.translationAPI();
        this.progressCallback(80);
        await this.keywordAPI();
        this.progressCallback(100);
        const value = await this.makeMyResultList(this.keywordResponseDTO);
        return value;
    }
}
