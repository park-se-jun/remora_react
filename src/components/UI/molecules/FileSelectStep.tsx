import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useStoreState } from "components/store/Store";
import sendingFiles from "modules/SendingFile";
import { setError, setResult, setStep } from "components/store/ActionCreator";
import DropBox from "./DropBox";
import BasicButton from "../atoms/BasicButton";
import SendingStep from "./SendingStep";

export default function FileSelectStep() {
    const { fileList } = useStoreState();
    const [startUpload, setStartUpload] = useState<boolean>(false);
    const [buttonActivation, setButtonActivation] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(fileList);
        if (fileList.length !== 0) setButtonActivation(true);
    });
    const onUpload = () => {
        console.log("파일전송시작");
        setStartUpload(true);
        dispatch(setStep(1));
        sendingFiles(
            fileList,
            result => {
                dispatch(setResult(result.data));
            },
            err => {
                dispatch(setError(err));
            },
        );
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
