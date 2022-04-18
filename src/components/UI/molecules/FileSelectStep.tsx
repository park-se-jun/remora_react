import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useStoreState } from "store/Store";
// import sendingFiles from "modules/SendingFile";
import { useResultDispatch } from "store/ResultSotre";
import { setError, setProgress, setResult, setStep } from "store/ActionCreator";
import SendingManager from "modules/SendingManager.class";
import MakeFormData from "modules/MakeFormData";
import DropBox from "./DropBox";
import BasicButton from "../atoms/BasicButton";
import SendingStep from "./SendingStep";

export default function FileSelectStep() {
    const { fileList } = useStoreState();
    const [startUpload, setStartUpload] = useState<boolean>(false);
    const [buttonActivation, setButtonActivation] = useState(false);
    const dispatch = useDispatch();
    const resultDispatch = useResultDispatch();
    useEffect(() => {
        console.log(fileList);
        if (fileList.length !== 0) setButtonActivation(true);
    });
    const onUpload = () => {
        console.log("파일전송시작");
        setStartUpload(true);
        dispatch(setStep(1));
        const sendingManager = new SendingManager(MakeFormData(fileList));
        sendingManager.setProgressCallback(value => {
            dispatch(setProgress(value));
            console.log(value);
        });
        sendingManager
            .sendingDataAPI()
            .then(result => {
                resultDispatch(setResult(result));
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

            <BasicButton disabled={!buttonActivation} onClick={onUpload}>
                다음
            </BasicButton>
        </>
    );
}
