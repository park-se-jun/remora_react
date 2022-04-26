import ResponseBase from "./ResponseBase";

export interface KeywordRequestDTO {
    translatedText: string[] | null;
}
export interface KeyworResponseDTO extends ResponseBase {
    translatedText: string[] | null;
    keywords: string[][] | null;
}
