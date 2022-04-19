// import PropTypes from "prop-types";

import { Box, Button, Typography } from "@mui/material";
import DownloadManager from "modules/DownloadManager.class";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setCurrContent, setIsDialogOpen } from "store/ActionCreator";
import { useResultDispatch, useResultStoreState } from "store/ResultSotre";
import BasicButton from "../atoms/BasicButton";
import MyDialog from "../atoms/myDialog";
import TempAdvertiseBanner from "../atoms/TempAdvertiseBanner";
import LinkToExtractButton from "../molecules/LinkToExtractButton";
import ResultList from "../molecules/ResultList";

const buttonStyle = {
    bgcolor: "secondary.dark",
    padding: "20px",
    borderRadius: 4,
    marginRight: "10px",
    marginLeft: "10px",
};
function ResultContent() {
    const { resultList, isDialogOpen } = useResultStoreState();
    const [myDownloadManager, setMyDownloadManager] =
        useState<DownloadManager | null>(null);
    const resultDispatch = useResultDispatch();
    useEffect(() => {
        if (resultList) {
            console.log(resultList);
            const downloadManager = new DownloadManager(resultList);
            setMyDownloadManager(downloadManager);
        }
    }, []);

    const handleClose = () => {
        resultDispatch(setCurrContent(null));
        resultDispatch(setIsDialogOpen(false));
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "40vh",
            }}
        >
            <TempAdvertiseBanner />

            {resultList ? (
                <>
                    <ResultList resultList={resultList} />
                    <Box>
                        <BasicButton
                            disableElevation
                            sx={buttonStyle}
                            size="large"
                            onClick={myDownloadManager?.downloadAllContent}
                        >
                            전체 결과를 파일로 저장
                        </BasicButton>
                        <BasicButton
                            disableElevation
                            size="large"
                            sx={buttonStyle}
                            to="/front"
                            component={Link}
                        >
                            front page
                        </BasicButton>
                    </Box>

                    <MyDialog
                        resultList={resultList}
                        open={isDialogOpen}
                        downloadManager={myDownloadManager}
                        onClose={handleClose}
                    />
                </>
            ) : (
                <>
                    <Typography>
                        결과를 확인할 수 없습니다. 추출을 먼저 해주세요!!
                    </Typography>
                    <Box>
                        <LinkToExtractButton />
                    </Box>
                </>
            )}
        </Box>
    );
}
export default ResultContent;
