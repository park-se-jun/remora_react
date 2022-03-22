import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useResultDispatch, useResultStoreState } from "store/ResultSotre";
import mock1 from "data/mockData";
import { setResult } from "store/ActionCreator";
import LinkToExtractButton from "../molecules/LinkToExtractButton";

function FrontContent() {
    // 결과화면 테스트를 위한 임시 코드 입니다.
    const [isTesting, setIsTesting] = useState<boolean>(false);
    const resultStoreState = useResultStoreState();
    const resultDispatch = useResultDispatch();
    useEffect(() => {
        if (isTesting) {
            resultDispatch(setResult(mock1));
            console.log(resultStoreState);
        }
    }, [isTesting]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Typography variant="h6" component="div" align="center">
                Remora를 이용해서 동영상 속 텍스트를 추출해 보세요!
            </Typography>

            <LinkToExtractButton />
            <Button
                onClick={() => {
                    setIsTesting(true);
                }}
            >
                테서트 버튼
            </Button>
        </Box>
    );
}
export default FrontContent;
