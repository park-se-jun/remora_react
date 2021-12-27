import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function MyDialog({ value: result, onClose, open }) {
    const isTranslated = result.needTranslation;
    const contents = isTranslated
        ? result.translatedResultText
        : result.originResultText;
    return (
        <Dialog sx={{ p: "2rem" }} onClose={onClose} open={open} maxWidth="sm">
            <DialogTitle>
                <Typography sx={{ fontSize: 8 }} color="text.secondary">
                    키워드 입니다.
                </Typography>
                {result.keywords.map((keyword, i, keywords) => {
                    if (i === keywords.length - 1) {
                        return keyword;
                    }
                    return keyword.concat(", ");
                })}
            </DialogTitle>
            <DialogContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    {isTranslated ? (
                        <>번역된 영상의 전문입니다. </>
                    ) : (
                        <>번역되지 않은 영상 입니다.</>
                    )}
                </Typography>

                {contents.map(content => {
                    return <Typography variant="body">{content}</Typography>;
                })}
            </DialogContent>
        </Dialog>
    );
}
MyDialog.propTypes = {
    value: PropTypes.shape({
        success: PropTypes.bool,
        message: PropTypes.string,
        code: PropTypes.number,
        originResultText: PropTypes.arrayOf(PropTypes.string),
        translatedResultText: PropTypes.arrayOf(PropTypes.string),
        keywords: PropTypes.arrayOf(PropTypes.string),
        needTranslation: PropTypes.bool,
    }),
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
};
MyDialog.defaultProps = {
    onClose: null,
    value: {
        success: true,
        message: "default",
        code: 0,
        originResultText: ["default"],
        translatedResultText: ["default"],
        keywords: ["default"],
        needTranslation: true,
    },
};
