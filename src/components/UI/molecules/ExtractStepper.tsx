import { Stepper, Box, Step, StepLabel } from "@mui/material";
import { useStoreState } from "store/Store";
import { Outlet } from "react-router-dom";

const steps = ["동영상 선택", "전송", "결과 확인"];

function ExtractStepper() {
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
        </Box>
    );
}
export default ExtractStepper;
