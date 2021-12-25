import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import TranslationToggleButton from "./TranslationToggleButton";

function FileInfo({ file, onTranslate, disabled: isDisabled }) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "nowrap",
                border: 1,
                borderRadius: 2,
                borderColor: theme.palette.borderColor,
            }}
        >
            <VideoLibraryIcon sx={{ fontSize: "8rem" }} />
            {file.name}
            <TranslationToggleButton
                Translation={file.translation}
                onClick={() => onTranslate(file.id)}
                disabled={isDisabled}
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
    onTranslate: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};
FileInfo.defaultProps = {
    disabled: false,
};
