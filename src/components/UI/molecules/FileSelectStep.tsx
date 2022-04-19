import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useStoreState } from "store/Store";
// import sendingFiles from "modules/SendingFile";
import { useResultDispatch, useResultStoreState } from "store/ResultSotre";
import {
    clearState,
    setError,
    setProgress,
    setResult,
    setStep,
} from "store/ActionCreator";
import SendingManager from "modules/SendingManager.class";
import MakeFormData from "modules/MakeFormData";
import DropBox from "./DropBox";
import BasicButton from "../atoms/BasicButton";
import SendingStep from "./SendingStep";

export default function FileSelectStep() {
    const { fileList } = useStoreState();
    const { resultList } = useResultStoreState();
    const [startUpload, setStartUpload] = useState<boolean>(false);
    const [buttonActivation, setButtonActivation] = useState(false);
    const dispatch = useDispatch();
    const resultDispatch = useResultDispatch();
    useEffect(() => {
        if (fileList.length !== 0) setButtonActivation(true);
    });
    const onUpload = () => {
        console.log("파일전송시작");
        console.log(fileList);
        setStartUpload(true);
        dispatch(setStep(1));
        resultDispatch(clearState());
        const formData = MakeFormData(fileList);
        const sendingManager = new SendingManager(formData);
        sendingManager.setProgressCallback(value => {
            dispatch(setProgress(value));
            console.log(value);
        });
        sendingManager
            .testSendingAPI(fileList.length)
            .then(result => {
                resultDispatch(setResult(result));
                console.log(resultList);
            })
            .catch(err => {
                resultDispatch(setError(err));
                console.log(err);
            });
    };
    if (startUpload) {
        return <SendingStep />;
    }
    return (
        <>
            <Typography align="center" variant="h6">
                텍스트를 추출할 영상을 선택하고 번역 여부를 선택해 주세요
            </Typography>
            <DropBox />

            <BasicButton
                sx={{ fontWeight: "fontWeightBold", bgcolor: "secondary.dark" }}
                disableElevation={false}
                disabled={!buttonActivation}
                onClick={onUpload}
            >
                추출하기
            </BasicButton>
        </>
    );
}
