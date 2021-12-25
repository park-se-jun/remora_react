import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import PropTypes from "prop-types";
import { useState } from "react";
import TranslationToggleButton from "./TranslationToggleButton";

function FileComponent({ fileName, disabled: isDisabled }) {
    const theme = useTheme();
    const [translation, setTranslation] = useState(true);
    const getTranslation = doTranslate => {
        setTranslation(doTranslate);
    };
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
            {fileName}
            {translation}
            <TranslationToggleButton
                getTranslation={getTranslation}
                disabled={isDisabled}
            />
        </Box>
    );
}
export default FileComponent;

FileComponent.propTypes = {
    fileName: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};
FileComponent.defaultProps = {
    disabled: false,
};
