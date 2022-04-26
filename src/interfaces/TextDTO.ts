import ResponseBase from "./ResponseBase";

export interface TextRequestDTO {
    frameSet: number[][] | null;
    videoCode: string[] | null;
}
export interface TextResponseDTO extends ResponseBase {
    text: string[];
}
