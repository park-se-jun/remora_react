import { Typography } from "@mui/material";
import { useDispatch, useStoreState } from "components/store/Store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BasicButton from "../atoms/BasicButton";

function ErrorPage() {
    const dispatch = useDispatch();
    const { step } = useStoreState();
    useEffect(() => {
        if (step !== 2) dispatch({ type: "SET_STEP", step: 2 });
    });
    return (
        <>
            <Typography variant="h6">추출에 실패했습니다...</Typography>

            <BasicButton
                sx={{
                    width: 11.5 / 12,
                    bgcolor: "secondary.dark",
                    borderRadius: 3,
                    fontWeight: "fontWeightBold",
                }}
                to="/front"
                component={Link}
            >
                front페이지로 돌아가기
            </BasicButton>
        </>
    );
}
export default ErrorPage;
