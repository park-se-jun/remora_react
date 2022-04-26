import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Box, Typography } from "@mui/material";
import { useDispatch, useStoreState } from "store/Store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BasicButton from "../atoms/BasicButton";

function SuccessPage() {
    const dispatch = useDispatch();
    const { step } = useStoreState();
    useEffect(() => {
        if (step !== 2) dispatch({ type: "SET_STEP", step: 2 });
    });
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <VideoLibraryIcon color="primary" sx={{ fontSize: "5rem" }} />

            <Typography variant="h6">추출이 완료되었습니다.</Typography>
            <BasicButton
                disableElevation
                sx={{
                    bgcolor: "secondary.dark",
                    borderRadius: 3,
                    fontWeight: "fontWeightBold",
                }}
                to="/extract/result"
                size="large"
                component={Link}
            >
                결과확인
            </BasicButton>
        </Box>
    );
}
export default SuccessPage;
