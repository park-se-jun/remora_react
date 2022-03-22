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
import { MyResult } from "interfaces/MyTypes";
import PropTypes from "prop-types";

interface ResultInfoProps extends ButtonBaseProps {
    result: MyResult;
    index: number;
}
function ResultInfo({ result, index: i, ...props }: ResultInfoProps) {
    return (
        <>
            <ButtonBase {...props}>
                <Card sx={{ height: "100%" }} variant="elevation">
                    <CardContent>
                        {result.success ? (
                            <>
                                <Typography
                                    sx={{ fontSize: 12 }}
                                    color="text.secondary"
                                >
                                    {i + 1} 번째 파일의 키워드
                                </Typography>
                                <List>
                                    {result.keywords.map(keyword => {
                                        return (
                                            <Typography
                                                variant="h5"
                                                component={ListItem}
                                            >
                                                {keyword}
                                            </Typography>
                                        );
                                    })}
                                </List>
                            </>
                        ) : (
                            <Typography
                                sx={{ fontSize: 12 }}
                                color="text.secondary"
                            >
                                {i + 1}
                                {`번째 영상은

                                 문자 검출에 실패했습니다`}
                            </Typography>
                        )}
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
