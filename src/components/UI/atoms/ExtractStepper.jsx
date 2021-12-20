import {
    Stepper,
    Box,
    /* LinearProgress, */ Step,
    StepLabel,
} from "@mui/material";
import React from "react";
import BasicButton from "./BasicButton";

const steps = ["동영상 선택", "번역 선택", "결과 확인"];

function ExtractStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    return (
        <Box
            sx={{
                width: "80%",
                border: 1,
                borderColor: "#e5e5e5",
                borderRadius: 3,
                pt: 30,
                pl: "10%",
                pr: "10%",
                pb: 30,
            }}
        >
            <Stepper activeStep={activeStep}>
                {steps.map(label => {
                    return (
                        <Step key={label}>
                            <StepLabel> {label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep + 1 === steps.length ? (
                <Box>end</Box>
            ) : (
                <Box>
                    <BasicButton
                        onClick={handleNext}
                        text={`go to ${activeStep + 2}`}
                    />
                </Box>
            )}
        </Box>
    );
}
export default ExtractStepper;
