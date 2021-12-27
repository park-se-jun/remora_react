/* eslint-disable react/jsx-props-no-spreading */
import {
    ButtonBase,
    Card,
    CardContent,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";

function ResultInfo({ value: result, index: i, onDialogContent, onClick }) {
    const handleClock = () => {
        onClick();
        onDialogContent(result);
    };

    return (
        <>
            <Card variant="elevation">
                <ButtonBase onClick={handleClock}>
                    <CardContent>
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
                    </CardContent>
                </ButtonBase>
            </Card>
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
