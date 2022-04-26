import ResponseBase from "./ResponseBase";

export interface TranslationRequestDTO {
    text: string[];
    needTranslation: boolean[];
}
export interface TranslationResponseDTO extends ResponseBase {
    text: string[] | null;
    translatedText: string[] | null;
}
