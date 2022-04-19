import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import EllipsisText from "react-ellipsis-text";
import PropTypes from "prop-types";
import { BasicProps, MyFile } from "interfaces/MyTypes";
import { useDispatch } from "store/Store";
import TranslationToggleButton from "./TranslationToggleButton";

interface FileInfoProps extends BasicProps {
    file: MyFile;
}
function FileInfo({ file }: FileInfoProps) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const changeTranslate = () => {
        dispatch({ type: "TRANSLATE_CHANGE", file });
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "nowrap",
                mr: "10px",
                border: 1,
                borderRadius: 2,
                borderColor: theme.palette.primary.contrastText,
                justifyContent: "space-between",
                maxHeight: "9rem",
                minWidth: "8rem ",
            }}
        >
            <VideoLibraryIcon sx={{ fontSize: "5rem" }} />
            <EllipsisText text={file.name} length={10} tooltip />

            <TranslationToggleButton
                sx={{ marginTop: "10px", width: 1 }}
                Translation={file.translation}
                onClick={changeTranslate}
            />
        </Box>
    );
}
export default FileInfo;

FileInfo.propTypes = {
    file: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        translation: PropTypes.bool.isRequired,
    }).isRequired,
};
