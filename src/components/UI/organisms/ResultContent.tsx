// import PropTypes from "prop-types";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import BasicButton from "../atoms/BasicButton";
import MyDialog from "../atoms/myDialog";
import LinkToExtractButton from "../molecules/LinkToExtractButton";
import ResultList from "../molecules/ResultList";

function ResultContent() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState({
        success: true,
        message: "default",
        code: 0,
        originResultText: ["default"],
        translatedResultText: ["default"],
        keywords: ["default"],
        needTranslation: true,
    });
    const res = location.state;
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        // setDialogContent(null);
        setOpen(false);
    };
    const handleDialogContent = content => {
        setDialogContent(content);
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
            {res ? (
                <>
                    <ResultList
                        value={res.res}
                        onDialogContent={handleDialogContent}
                        onItemClick={handleOpen}
                    />
                    <Box>
                        <BasicButton to="/front" component={Link}>
                            front page
                        </BasicButton>
                    </Box>
                    <MyDialog
                        open={open}
                        onClose={handleClose}
                        value={dialogContent}
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
