import { Dispatch } from "react";

export interface BasicProps {
    children?: JSX.Element | JSX.Element[];
}
export interface MyFile extends File {
    id: string;
    translation: boolean;
}
export type MyResult = {
    success: boolean;
    message: string;
    code: number;
    originResultText: Array<string>;
    translatedResultText: Array<string>;
    keyword: Array<string>;
    needTranslation: boolean;
};

export type MyAction =
    | { type: "TRANSLATE_CHANGE"; file: MyFile }
    | { type: "ADD_FILE"; files: Array<MyFile> }
    | { type: "SET_STEP"; step: number }
    | { type: "SET_RESULT"; resultList: Array<MyResult> }
    | { type: "CLEAR_STATE" }
    | { type: "SET_ERROR"; error: any };

export type MyDispatch = Dispatch<MyAction>;

export type StoreState = {
    fileList: Array<MyFile>;
    step: number;
    resultList: Array<MyResult> | null | undefined;
    error: any;
};
