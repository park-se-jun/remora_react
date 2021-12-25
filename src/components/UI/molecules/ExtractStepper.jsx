import {
    Stepper,
    Box,
    /* LinearProgress, */ Step,
    StepLabel,
} from "@mui/material";
import React from "react";

import BasicButton from "../atoms/BasicButton";
import VideoItems from "./VideoItems";
import FileSelectStep from "./FileSelectStep";

const steps = ["동영상 선택", "번역 선택", "결과 확인"];

function ExtractStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [fileArray, setFileArray] = React.useState([]);
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const handleFiles = acceptedFiles => {
        const list = fileArray.concat(acceptedFiles);
        console.log(list);
        setFileArray(list);
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
                            <FileSelectStep getFileArray={handleFiles} />
                            <Box sx={{ display: "flex" }}>
                                <VideoItems
                                    Files={fileArray}
                                    TranslationDisabled
                                />
                            </Box>
                        </>
                    ),
                    1: (
                        <>
                            번역 여부를 선택해 주세요
                            <Box sx={{ display: "flex" }}>
                                <VideoItems Files={fileArray} />
                            </Box>
                        </>
                    ),
                }[activeStep]
            }

            {fileArray.length === 0 ? (
                <BasicButton text="다음" disabled onClick={handleNext} />
            ) : (
                <BasicButton text="다음" onClick={handleNext} />
            )}
        </Box>
    );
}
export default ExtractStepper;
