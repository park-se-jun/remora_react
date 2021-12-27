// import PropTypes from "prop-types";

import { useState } from "react";
import { useLocation } from "react-router";
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
    return res ? (
        <>
            <ResultList
                value={res.res}
                onDialogContent={handleDialogContent}
                onItemClick={handleOpen}
            />

            <MyDialog open={open} onClose={handleClose} value={dialogContent} />
        </>
    ) : (
        <>
            결과를 확인할 수 없습니다. 추출을 먼저 해주세요!!
            <LinkToExtractButton />
        </>
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
