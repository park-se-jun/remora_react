import MyResultList from "interfaces/MyResultList";
import { BasicProps, MyResult } from "interfaces/MyTypes";
import { createContext, Dispatch, useContext, useReducer } from "react";
import {
    CLEAR_STATE,
    SET_CURR_CONTENT,
    SET_DIALOG_OPEN,
    SET_ERROR,
    SET_RESULT,
} from "./ActionType";

type ResultState = {
    resultList: MyResultList | null | undefined;
    error: any;
    currContent: number | null;
    isDialogOpen: boolean;
};
export type ResultAction =
    | { type: "SET_RESULT"; resultList: MyResultList }
    | { type: "SET_ERROR"; error: any }
    | { type: "CLEAR_STATE" }
    | { type: "SET_CURR_CONTENT"; currResult: number | null }
    | { type: "SET_DIALOG_OPEN"; isDialogOpen: boolean };
const initialResultState: ResultState = {
    resultList: undefined,
    error: undefined,
    currContent: null,
    isDialogOpen: false,
};
function reducer(state: ResultState, action: ResultAction): ResultState {
    switch (action.type) {
        case SET_RESULT: {
            return {
                ...state,
                resultList: action.resultList,
            };
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.error,
            };
        }
        case CLEAR_STATE: {
            return {
                ...initialResultState,
            };
        }
        case SET_DIALOG_OPEN:
            return {
                ...state,
                isDialogOpen: action.isDialogOpen,
            };
        case SET_CURR_CONTENT:
            return {
                ...state,
                currContent: action.currResult,
            };

        default:
            throw new Error();
    }
}
const ResultStoreContext = createContext<ResultState | null>(null);
const ResultDispatchContext = createContext<Dispatch<ResultAction> | null>(
    null,
);
const ResultContextProvider = ({ children }: BasicProps) => {
    const [resultState, dispatch] = useReducer(reducer, initialResultState);
    return (
        <ResultStoreContext.Provider value={resultState}>
            <ResultDispatchContext.Provider value={dispatch}>
                {children}
            </ResultDispatchContext.Provider>
        </ResultStoreContext.Provider>
    );
};
export const useResultStoreState = () => {
    const resultStoreState = useContext(ResultStoreContext);
    if (!resultStoreState) throw new Error("Cannot find SampleProvider");
    return resultStoreState;
};
export const useResultDispatch = () => {
    const dispatch = useContext(ResultDispatchContext);
    if (!dispatch) throw new Error("Cannot find SampleProvider");
    return dispatch;
};
export default ResultContextProvider;
