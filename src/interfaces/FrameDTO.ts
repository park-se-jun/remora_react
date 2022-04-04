import ResponseBase from "./ResponseBase";

export interface FrameRequestDTO {
    videoCode: string[];
}
export interface FrameResponseDTO extends ResponseBase {
    frameSet: number[][];
    videoCode: string[];
}
