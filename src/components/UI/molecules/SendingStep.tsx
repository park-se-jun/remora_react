import { Box, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useStoreState } from "store/Store";
import { useEffect } from "react";
import { useResultStoreState } from "store/ResultSotre";
import MyProgress from "../atoms/MyProgress";

export default function SendingStep() {
    const navigate = useNavigate();
    /*  submit 관련 status     */
    const { resultList, error } = useResultStoreState();
    const { progress } = useStoreState();
    useEffect(() => {
        if (resultList !== undefined) {
            navigate("success", { replace: true });
        } else if (error !== undefined) {
            navigate("error", { replace: true });
        }
    });

    return (
        <>
            <Box margin="auto">
                <CircularProgress />
            </Box>

            <Typography align="center" variant="h6">
                파일을 전송중 입니다...
            </Typography>
            <MyProgress value={progress} />
        </>
    );
}
