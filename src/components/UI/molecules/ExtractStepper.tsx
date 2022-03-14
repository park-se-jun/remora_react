import { Stepper, Box, Step, StepLabel } from "@mui/material";

// import React from "react";
import { useDispatch, useStoreState } from "components/store/Store";
import { Outlet } from "react-router-dom";

// import BasicButton from "../atoms/BasicButton";
// import MyProgress from "../atoms/MyProgress";
// import FileList from "./FileList";
// import FileSelectStep from "./FileSelectStep";

const steps = ["동영상 선택", "전송", "결과 확인"];

function ExtractStepper() {
    // const [activeStep, setActiveStep] = React.useState(0);
    // const [fileArray, setFiles] = React.useState([]);

    // const handleNext = () => {
    //     setActiveStep(prevActiveStep => prevActiveStep + 1);
    // };
    // const getFiles = file => {
    //     setFiles(fileArray.concat(file));
    // };
    const { step } = useStoreState();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                border: 1,
                borderColor: "#e5e5e5",
                borderRadius: 3,
                maxWidth: "550px",
                minWidth: "550px",
                minHeight: "500px",
                maxHeight: "500px",
                alignItems: "stretch",
                padding: "1rem",
                justifyContent: "space-between",
            }}
        >
            <Stepper activeStep={step}>
                {steps.map(label => {
                    return (
                        <Step key={label}>
                            <StepLabel> {label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Outlet />
            {/*
                    2: (
                        <>
                            {loading ? (
                                <>
                                    <CircularProgress />
                                    <Typography variant="h6">
                                        파일을 전송중 입니다...
                                    </Typography>

                                    <MyProgress value={progress} />
                                </>
                            ) : (
                                <Typography variant="h6">전송완료!</Typography>
                            )}
                        </>
                    ),
                    3: error ? (
                        <>
                            <Typography variant="h6">
                                추출에 실패했습니다...
                            </Typography>

                            <BasicButton
                                sx={{
                                    width: 11.5 / 12,
                                    bgcolor: "secondary.dark",
                                    borderRadius: 3,
                                    fontWeight: "fontWeightBold",
                                }}
                                text="front페이지로 돌아가기"
                                to="/front"
                                component={Link}
                            />
                        </>
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
                                    borderRadius: 3,
                                    fontWeight: "fontWeightBold",
                                }}
                                text="결과 확인"
                                to="/extract/result"
                                state={{
                                    res: response,
                                }}
                                size="lg"
                                component={Link}
                            />
                        </Box>
                    ),
                }[activeStep]
            */}
        </Box>
    );
}
export default ExtractStepper;
