import { MyAction, MyFile, MyResult } from "interfaces/MyTypes";
import {
    ADD_FILE,
    CLEAR_STATE,
    SET_CURR_CONTENT,
    SET_DIALOG_OPEN,
    SET_ERROR,
    SET_RESULT,
    SET_STEP,
    TRANSLATE_CHANGE,
} from "./ActionType";
import { ResultAction } from "./ResultSotre";

// Store에 대한 Action
export const changeTranslate = (file: MyFile): MyAction => {
    return { type: TRANSLATE_CHANGE, file };
};
export const addFile = (files: Array<MyFile>): MyAction => {
    return { type: ADD_FILE, files };
};
export const setStep = (step: number): MyAction => {
    return { type: SET_STEP, step };
};

// ResultStore에 대한 Action
export const clearState = (): ResultAction => {
    return { type: CLEAR_STATE };
};
export const setError = (error: any): ResultAction => {
    return { type: SET_ERROR, error };
};
export const setResult = (resultList: Array<MyResult>): ResultAction => {
    return { type: SET_RESULT, resultList };
};
export const setCurrContent = (currResult: MyResult): ResultAction => {
    return { type: SET_CURR_CONTENT, currResult };
};
export const setIsDialogOpen = (isDialogOpen: boolean): ResultAction => {
    return { type: SET_DIALOG_OPEN, isDialogOpen };
};
