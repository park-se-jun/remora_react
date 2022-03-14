import { MyAction, MyFile, MyResult } from "interfaces/MyTypes";
import {
    ADD_FILE,
    CLEAR_STATE,
    SET_ERROR,
    SET_RESULT,
    SET_STEP,
    TRANSLATE_CHANGE,
} from "./ActionType";

export const changeTranslate = (file: MyFile): MyAction => {
    return { type: TRANSLATE_CHANGE, file };
};
export const addFile = (files: Array<MyFile>): MyAction => {
    return { type: ADD_FILE, files };
};
export const setStep = (step: number): MyAction => {
    return { type: SET_STEP, step };
};
export const setResult = (resultList: Array<MyResult>): MyAction => {
    return { type: SET_RESULT, resultList };
};
export const clearState = (): MyAction => {
    return { type: CLEAR_STATE };
};
export const setError = (error: any): MyAction => {
    return { type: SET_ERROR, error };
};
