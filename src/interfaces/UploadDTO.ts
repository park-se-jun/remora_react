import ResponseBase from "./ResponseBase";

export interface UploadResponseDTO extends ResponseBase {
    videoCode: string;
    needTranslation: boolean;
}
