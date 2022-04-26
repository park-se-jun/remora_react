import { Dispatch } from "react";

export interface BasicProps {
    children?: JSX.Element | JSX.Element[];
}
export interface MyFile extends File {
    id: string;
    translation: boolean;
}

export type MyAction =
    | { type: "TRANSLATE_CHANGE"; file: MyFile }
    | { type: "ADD_FILE"; files: Array<MyFile> }
    | { type: "SET_STEP"; step: number }
    | { type: "CLEAR_STATE" }
    | { type: "SET_PROGRESS"; progress: number };

export type MyDispatch = Dispatch<MyAction>;

export type StoreState = {
    fileList: Array<MyFile>;
    step: number;
    progress: number;
};
export interface MyResult {
    keywords: string[];
    text: string;
}
