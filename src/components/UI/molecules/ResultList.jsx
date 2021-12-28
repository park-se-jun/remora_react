import { Box } from "@mui/material";
import PropTypes from "prop-types";
import ResultInfo from "../atoms/ResultInfo";

function ResultList({ value: resultList, onDialogContent, onItemClick }) {
    const handleItemClick = () => {
        onItemClick();
    };
    const handleDialogContent = content => {
        onDialogContent(content);
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                mt: "30vh",
                mb: "30vh",
                width: "100vh",
            }}
        >
            {resultList.map((result, i) => {
                return (
                    <ResultInfo
                        value={result}
                        index={i}
                        onDialogContent={handleDialogContent}
                        onClick={handleItemClick}
                    />
                );
            })}
        </Box>
    );
}
export default ResultList;
ResultList.propTypes = {
    value: PropTypes.arrayOf(
        PropTypes.shape({
            success: PropTypes.bool,
            message: PropTypes.string,
            code: PropTypes.number,
            originResultText: PropTypes.arrayOf(PropTypes.string),
            translatedResultText: PropTypes.arrayOf(PropTypes.string),
            keyword: PropTypes.arrayOf(PropTypes.string),
            needTranslation: PropTypes.bool,
        }),
    ),
    onDialogContent: PropTypes.func,
    onItemClick: PropTypes.func,
};
ResultList.defaultProps = {
    value: null,
    onDialogContent: null,
    onItemClick: null,
};
