import { Box } from "@mui/material";
import MyResultList from "interfaces/MyResultList";
import { MyResult } from "interfaces/MyTypes";
import { setCurrContent, setIsDialogOpen } from "store/ActionCreator";
import { useResultDispatch } from "store/ResultSotre";
import ResultInfo from "../atoms/ResultInfo";

type ResultListProps = {
    resultList: MyResultList;
};
function ResultList({ resultList }: ResultListProps) {
    console.log(resultList);
    const resultDispatch = useResultDispatch();
    function itemClickCallback(itemIndex: number) {
        resultDispatch(setIsDialogOpen(true));
        resultDispatch(setCurrContent(itemIndex));
    }
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                mt: "5vh",
                mb: "5vh",
                width: "100vh",
            }}
        >
            {resultList.getResultList().map((result, index) => {
                return (
                    <ResultInfo
                        index={index}
                        onClick={() => {
                            itemClickCallback(index);
                        }}
                    />
                );
            })}
        </Box>
    );
}
export default ResultList;
