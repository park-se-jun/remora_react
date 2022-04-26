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
import { CopyToClipboard } from "react-copy-to-clipboard";
import DownloadManager from "modules/DownloadManager.class";
import { useResultStoreState } from "store/ResultSotre";
import { toast } from "react-toastify";

interface MyDialogProps extends DialogProps {
    resultList: MyResultList;
    downloadManager?: DownloadManager | null;
}
function MyDialog({
    downloadManager,
    resultList,
    onClose,
    open,
}: MyDialogProps) {
    const copyNotify = () => {
        toast.info("복사에성공했습니다.");
    };
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
                        <CopyToClipboard
                            text={resultList.getKeywordsOf(currContent)}
                            onCopy={copyNotify}
                        >
                            <Button>키워드를 클립보드로 복사</Button>
                        </CopyToClipboard>
                        <CopyToClipboard
                            text={resultList.getTextOf(currContent)}
                            onCopy={copyNotify}
                        >
                            <Button>내용을 클립보드로 복사</Button>
                        </CopyToClipboard>
                        <Button
                            onClick={() => {
                                downloadManager?.downloadTheContent(
                                    currContent,
                                );
                            }}
                        >
                            파일로 다운
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </>
    );
}
export default MyDialog;
MyDialog.defaultProps = { downloadManager: null };
