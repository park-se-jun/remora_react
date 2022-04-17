import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    Typography,
} from "@mui/material";
import MyResultList from "interfaces/MyResultList";
import { ClipboardCopyString } from "modules/ClipboardCopy";
import { useResultStoreState } from "store/ResultSotre";
// import PropTypes from "prop-types";
interface MyDialogProps extends DialogProps {
    resultList: MyResultList;
}
function MyDialog({ resultList, onClose, open }: MyDialogProps) {
    const { currContent } = useResultStoreState();
    return (
        <>
            {currContent === null ? (
                <></>
            ) : (
                <Dialog
                    sx={{ p: "2rem" }}
                    onClose={onClose}
                    open={open}
                    maxWidth="sm"
                >
                    <DialogTitle>
                        <Typography sx={{ fontSize: 8 }} color="text.secondary">
                            키워드 입니다.
                        </Typography>
                        {resultList.getKeywordsOf(currContent)}
                    </DialogTitle>
                    <DialogContent>
                        {resultList.getTextOf(currContent)}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                ClipboardCopyString(
                                    resultList.getKeywordsOf(currContent),
                                );
                            }}
                        >
                            키워드를 클립보드로 복사
                        </Button>
                        <Button
                            onClick={() => {
                                ClipboardCopyString(
                                    resultList.getTextOf(currContent),
                                );
                            }}
                        >
                            내용을 클립보드로 복사
                        </Button>
                        <Button>파일로 다운</Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
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
