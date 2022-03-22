import { Box } from "@mui/material";
import { MyResult } from "interfaces/MyTypes";
import PropTypes from "prop-types";
import { setCurrContent, setIsDialogOpen } from "store/ActionCreator";
import { useResultDispatch, useResultStoreState } from "store/ResultSotre";
import ResultInfo from "../atoms/ResultInfo";

type ResultListProps = {
    value: Array<MyResult>;
};
function ResultList({ value: resultList }: ResultListProps) {
    const { resultList: list } = useResultStoreState();
    console.log(list);
    const resultDispatch = useResultDispatch();
    function itemClickCallback(currResult: MyResult) {
        resultDispatch(setIsDialogOpen(true));
        resultDispatch(setCurrContent(currResult));
    }
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
                        result={result}
                        index={i}
                        onClick={() => {
                            itemClickCallback(result);
                        }}
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
};
ResultList.defaultProps = {
    value: null,
};
