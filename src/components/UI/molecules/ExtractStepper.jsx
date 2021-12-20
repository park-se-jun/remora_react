import {
    Stepper,
    Box,
    /* LinearProgress, */ Step,
    StepLabel,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import BasicButton from "../atoms/BasicButton";

const steps = ["동영상 선택", "번역 선택", "결과 확인"];
function FileSelectStep() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
            wrap="wrap"
        >
            <Grid item xs="auto">
                <Typography variant="h6">
                    텍스트를 추출할 영상을 선택해 주세요
                </Typography>
            </Grid>
            <Grid item xs={12} />
            <Grid item xs="auto">
                <BasicButton text="동영상 파일 선택" />
            </Grid>
            <Grid item xs={12} />
            <Grid item xs="auto">
                <Typography variant="h6">
                    또는 파일을 여기에 놔주세요
                </Typography>
            </Grid>
        </Grid>
    );
}
// function UploadStep() {}
// function TranslationStep() {}
// function ExtractStep() {}
// function ResultStep() {}
function ExtractStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    return (
        <Box
            sx={{
                border: 1,
                borderColor: "#e5e5e5",
                borderRadius: 3,
                maxWidth: "550px",
                pt: "1%",
                pb: "1%",
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
            <FileSelectStep onClick={handleNext} />
        </Box>
    );
}
export default ExtractStepper;
