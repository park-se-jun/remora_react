// import PropTypes from "prop-types";

import { Box, Typography } from "@mui/material";
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

function ResultContent() {
    const { resultList, isDialogOpen } = useResultStoreState();
    const [myDownloadManager, setMyDownloadManager] =
        useState<DownloadManager | null>(null);
    const resultDispatch = useResultDispatch();
    useEffect(() => {
        if (resultList) setMyDownloadManager(new DownloadManager(resultList));
    }, []);

    const handleClose = () => {
        // setDialogContent(null);
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
                mt: "30vh",
                mb: "30vh",
                height: "40vh",
            }}
        >
            <TempAdvertiseBanner />

            {resultList ? (
                <>
                    <ResultList resultList={resultList} />
                    <Box>
                        <BasicButton
                            onClick={myDownloadManager?.downloadAllContent}
                        >
                            전체 결과를 파일로 저장
                        </BasicButton>
                        <BasicButton to="/front" component={Link}>
                            front page
                        </BasicButton>
                    </Box>

                    <MyDialog
                        resultList={resultList}
                        open={isDialogOpen}
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
// ResultContent.propTypes = {
//     resultList: PropTypes.arrayOf(
//         PropTypes.shape({
//             success: PropTypes.bool,
//             message: PropTypes.string,
//             code: PropTypes.number,
//             originResultText: PropTypes.arrayOf(PropTypes.string),
//             translatedResultText: PropTypes.arrayOf(PropTypes.string),
//             keyword: PropTypes.arrayOf(PropTypes.string),
//             needTranslation: PropTypes.bool,
//         }),
//     ),
// };
// ResultContent.defaultProps = {
//     resultList: null,
// };
