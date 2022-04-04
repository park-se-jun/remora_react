import ResponseBase from "./ResponseBase";

export interface TextRequestDTO {
    frameSet: number[][];
    videoCode: string[];
}
export interface TextResponseDTO extends ResponseBase {
    text: string[];
}
