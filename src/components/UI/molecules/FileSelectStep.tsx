import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useStoreState } from "components/store/Store";
import DropBox from "./DropBox";
import BasicButton from "../atoms/BasicButton";
import FileList from "./FileList";

export default function FileSelectStep() {
    const { fileList: files, step } = useStoreState();
    const [buttonActivation, setButtonActivation] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(files);
        if (files.length !== 0) setButtonActivation(true);
        if (step !== 0) dispatch({ type: "SET_STEP", step: 0 });
    });
    return (
        <>
            <Typography variant="h6">
                텍스트를 추출할 영상을 선택하고 번역 여부를 선택해 주세요
            </Typography>
            <DropBox />
            <FileList />
            <BasicButton
                disabled={!buttonActivation}
                component={Link}
                to="/extract/uploading"
            >
                다음
            </BasicButton>
        </>
    );
}
