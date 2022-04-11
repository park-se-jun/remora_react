import { Dispatch } from "react";
import { KeyworResponseDTO } from "./KeywordDTO";

export interface BasicProps {
    children?: JSX.Element | JSX.Element[];
}
export interface MyFile extends File {
    id: string;
    translation: boolean;
}
// export type MyResult = {
//     success: boolean;
//     message: string;
//     code: number;
//     originResultText: Array<string>;
//     translatedResultText: Array<string>;
//     keywords: Array<string>;
//     needTranslation: boolean;
// };

export type MyAction =
    | { type: "TRANSLATE_CHANGE"; file: MyFile }
    | { type: "ADD_FILE"; files: Array<MyFile> }
    | { type: "SET_STEP"; step: number }
    | { type: "CLEAR_STATE" };

export type MyDispatch = Dispatch<MyAction>;

export type StoreState = {
    fileList: Array<MyFile>;
    step: number;
};
export interface MyResult {
    keywords: string[];
    text: string;
}
