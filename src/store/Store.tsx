import {
    BasicProps,
    MyAction,
    MyDispatch,
    MyFile,
    StoreState,
} from "interfaces/MyTypes";
import { createContext, useContext, useReducer } from "react";
import {
    ADD_FILE,
    CLEAR_STATE,
    SET_ERROR,
    SET_RESULT,
    SET_STEP,
    TRANSLATE_CHANGE,
} from "./ActionType";
/* eslint-disable react/prop-types */
const initialState: StoreState = {
    fileList: [],
    step: 0,
};
function changeTranslate(fileArray: Array<MyFile>, id: string) {
    return fileArray.map(file => {
        return file.id === id
            ? Object.assign(file, { translation: !file.translation })
            : file;
    });
}
function reducer(state: StoreState, action: MyAction): StoreState {
    switch (action.type) {
        case ADD_FILE:
            return {
                ...state,
                fileList: state.fileList.concat(action.files),
            };
        case SET_STEP:
            return {
                ...state,
                step: action.step,
            };
        case TRANSLATE_CHANGE: {
            return {
                ...state,
                fileList: changeTranslate(state.fileList, action.file.id),
            };
        }
        default:
            throw new Error();
    }
}
const StoreStateContext = createContext<StoreState | null>(null);
const DispatchContext = createContext<MyDispatch | null>(null);

const StoreContextProvider = ({ children }: BasicProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreStateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StoreStateContext.Provider>
    );
};
export const useStoreState = () => {
    const storeState = useContext(StoreStateContext);
    if (!storeState) throw new Error("Cannot find SampleProvider");
    return storeState;
};
export const useDispatch = () => {
    const dispatch = useContext(DispatchContext);
    if (!dispatch) throw new Error("Cannot find SampleProvider");
    return dispatch;
};
export default StoreContextProvider;
