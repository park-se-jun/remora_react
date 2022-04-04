import ResponseBase from "./ResponseBase";

export interface KeywordRequestDTO {
    translatedText: string[];
}
export interface KeyworResponseDTO extends ResponseBase {
    translatedText: string[] | null;
    keywords: string[][] | null;
}
