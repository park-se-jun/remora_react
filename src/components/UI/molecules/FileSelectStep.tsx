import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
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
        console.log(fileList);
        setStartUpload(true);
        dispatch(setStep(1));
        const formData = MakeFormData(fileList);
        const sendingManager = new SendingManager(formData);
        sendingManager.setProgressCallback(value => {
            dispatch(setProgress(value));
            console.log(value);
        });
        axios({
            method: "get",
            url: "http://localhost:8080/health",
        }).then(response => console.log(response));
        // axios({
        //     method: "post",
        //     url: "http://20.231.32.80:8080/upload",
        //     headers: { "Content-Type": "multipart/form-data" },
        //     data: formData,
        // }).then(response => console.log(response));
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
