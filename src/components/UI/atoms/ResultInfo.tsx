/* eslint-disable react/jsx-props-no-spreading */
import {
    ButtonBase,
    ButtonBaseProps,
    Card,
    CardContent,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useResultStoreState } from "store/ResultSotre";

interface ResultInfoProps extends ButtonBaseProps {
    index: number;
}
function ResultInfo({ index: i, ...props }: ResultInfoProps) {
    const { resultList } = useResultStoreState();
    return (
        <>
            <ButtonBase {...props}>
                <Card sx={{ height: "100%" }} variant="elevation">
                    <CardContent>
                        <>
                            <Typography
                                sx={{ fontSize: 12 }}
                                color="text.secondary"
                            >
                                {i + 1} 번째 파일의 키워드
                            </Typography>
                            <List>
                                <Typography variant="h5" component={ListItem}>
                                    {resultList?.getKeywordsOf(i)}
                                </Typography>
                            </List>
                        </>
                        )
                    </CardContent>
                </Card>
            </ButtonBase>
        </>
    );
}
export default ResultInfo;
ResultInfo.propTypes = {
    value: PropTypes.shape({
        success: PropTypes.bool,
        message: PropTypes.string,
        code: PropTypes.number,
        originResultText: PropTypes.arrayOf(PropTypes.string),
        translatedResultText: PropTypes.arrayOf(PropTypes.string),
        keyword: PropTypes.arrayOf(PropTypes.string),
        needTranslation: PropTypes.bool,
    }).isRequired,
    index: PropTypes.number.isRequired,
    onDialogContent: PropTypes.func,
    onClick: PropTypes.func,
};
ResultInfo.defaultProps = {
    onDialogContent: null,
    onClick: null,
};
