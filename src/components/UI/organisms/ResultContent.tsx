// import PropTypes from "prop-types";

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { setCurrContent, setIsDialogOpen } from "store/ActionCreator";
import {
    defaultResult,
    useResultDispatch,
    useResultStoreState,
} from "store/ResultSotre";
import BasicButton from "../atoms/BasicButton";
import MyDialog from "../atoms/myDialog";
import LinkToExtractButton from "../molecules/LinkToExtractButton";
import ResultList from "../molecules/ResultList";

function ResultContent() {
    const { resultList, isDialogOpen, currContent } = useResultStoreState();
    const resultDispatch = useResultDispatch();

    const handleClose = () => {
        // setDialogContent(null);
        resultDispatch(setCurrContent(defaultResult));
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
            {resultList ? (
                <>
                    <ResultList value={resultList} />
                    <BasicButton to="/front" component={Link}>
                        front page
                    </BasicButton>
                    <MyDialog
                        open={isDialogOpen}
                        onClose={handleClose}
                        value={currContent}
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
