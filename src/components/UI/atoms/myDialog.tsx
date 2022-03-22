import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    Typography,
} from "@mui/material";
import { MyResult } from "interfaces/MyTypes";
import ClipboardCopyStringArray from "modules/ClipboardCopyStringArray";
// import PropTypes from "prop-types";

interface MyDialogProps extends DialogProps {
    value: MyResult;
}
function MyDialog({ value: result, onClose, open }: MyDialogProps) {
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
                    return <Typography variant="body1">{content}</Typography>;
                })}
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        ClipboardCopyStringArray(result.keywords, ", ");
                    }}
                >
                    키워드를 클립보드로 복사
                </Button>
                <Button
                    onClick={() => {
                        ClipboardCopyStringArray(contents, "\r\n ");
                    }}
                >
                    내용을 클립보드로 복사
                </Button>
                <Button>파일로 다운</Button>
            </DialogActions>
        </Dialog>
    );
}
export default MyDialog;
// MyDialog.propTypes = {
//     value: PropTypes.shape({
//         success: PropTypes.bool,
//         message: PropTypes.string,
//         code: PropTypes.number,
//         originResultText: PropTypes.arrayOf(PropTypes.string),
//         translatedResultText: PropTypes.arrayOf(PropTypes.string),
//         keywords: PropTypes.arrayOf(PropTypes.string),
//         needTranslation: PropTypes.bool,
//     }),
//     open: PropTypes.bool.isRequired,
//     onClose: PropTypes.func,
// };
// MyDialog.defaultProps = {
//     onClose: null,
//     value: {
//         success: true,
//         message: "default",
//         code: 0,
//         originResultText: ["default"],
//         translatedResultText: ["default"],
//         keywords: ["default"],
//         needTranslation: true,
//     },
// };
