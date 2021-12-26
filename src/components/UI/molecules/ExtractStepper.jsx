import {
    Stepper,
    Box,
    /* LinearProgress, */ Step,
    StepLabel,
    Typography,
    CircularProgress,
} from "@mui/material";
import defaultClient from "modules/DefaultClient";
import MakeFormData from "modules/MakeFormData";
import React from "react";
import { Link } from "react-router-dom";

import BasicButton from "../atoms/BasicButton";
import FileList from "./FileList";
import FileSelectStep from "./FileSelectStep";

const steps = ["동영상 선택", "번역 선택", "전송", "결과 확인"];

function ExtractStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [fileArray, setFiles] = React.useState([]);
    // const [response, setResponse] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const getFiles = file => {
        setFiles(fileArray.concat(file));
    };
    const setTranslate = id => {
        setFiles(
            fileArray.map(file => {
                return file.id === id
                    ? Object.assign(file, { translation: !file.translation })
                    : file;
            }),
        );
    };
    const submitForm = file => {
        setLoading(true);
        const formData = MakeFormData(file);
        defaultClient
            .post("/upload", formData)
            .then(result => {
                setLoading(false);
                console.log(result);
                handleNext();
            })
            .catch(err => {
                setLoading(false);
                setError(err);
                console.log(err);
                handleNext();
            });
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                border: 1,
                borderColor: "#e5e5e5",
                borderRadius: 3,
                maxWidth: "550px",
                pt: "1rem",
                pb: "1rem",
            }}
        >
            <Stepper
                sx={{ mt: 1, ml: 2, mr: 2, mb: 4 }}
                activeStep={activeStep}
            >
                {steps.map(label => {
                    return (
                        <Step key={label}>
                            <StepLabel> {label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {
                {
                    0: (
                        <>
                            <FileSelectStep getFileArray={getFiles} />
                            <Box sx={{ display: "flex" }}>
                                <FileList
                                    Files={fileArray}
                                    TranslationDisabled
                                />
                            </Box>
                            {fileArray.length === 0 ? (
                                <BasicButton
                                    text="다음"
                                    disabled
                                    onClick={handleNext}
                                />
                            ) : (
                                <BasicButton text="다음" onClick={handleNext} />
                            )}
                        </>
                    ),
                    1: (
                        <>
                            번역 여부를 선택해 주세요
                            <Box sx={{ display: "flex" }}>
                                <FileList
                                    Files={fileArray}
                                    onTranslate={setTranslate}
                                />
                            </Box>
                            <BasicButton
                                text="제출"
                                onClick={() => {
                                    submitForm(fileArray);
                                    handleNext();
                                }}
                            />
                        </>
                    ),
                    2: (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            {loading ? (
                                <>
                                    <CircularProgress />
                                    <Typography variant="h6">
                                        파일을 전송중 입니다...
                                    </Typography>
                                </>
                            ) : (
                                <Typography variant="h6">전송완료!</Typography>
                            )}
                        </Box>
                    ),
                    3: error ? (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            추출에 실패했습니다...
                            <BasicButton
                                text="front페이지로 돌아가기"
                                to="/front"
                                component={Link}
                            />
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h6">
                                추출이 완료되었습니다.
                            </Typography>
                            <BasicButton
                                sx={{
                                    bgcolor: "secondary.dark",
                                    height: 1,
                                    p: 3,
                                    borderRadius: 4,
                                    fontWeight: "fontWeightBold",
                                    maxWeight: "300px",
                                    minWeight: "300px",
                                }}
                                text="동영상속 텍스트를 추출하러 가기 ->"
                                to="/result"
                                size="lg"
                                component={Link}
                            />
                        </Box>
                    ),
                }[activeStep]
            }
        </Box>
    );
}
export default ExtractStepper;
