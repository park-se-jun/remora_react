/* eslint-disable react/jsx-props-no-spreading */

import uuidv4 from "modules/Uuid";
import { useTheme } from "@mui/material/styles";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import BasicButton from "../atoms/BasicButton";

function DropBox({ handleFiles }) {
    const theme = useTheme();

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        // accept: "video/*",
        noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            const files = acceptedFiles.map(file =>
                Object.assign(file, { id: uuidv4(), translation: true }),
            );
            handleFiles(files);
        },
    });
    return (
        <Box
            sx={{
                display: "flex",
                border: 2,
                borderColor: theme.palette.secondary.dark,
                borderStyle: "dashed",
                alignItems: "center",
                flexDirection: "column",
            }}
            {...getRootProps()}
        >
            <input {...getInputProps()} />

            <BasicButton
                sx={{ mt: "1rem" }}
                text="동영상 파일 선택"
                variant="contained"
                onClick={open}
            />
            <Box sx={{ mt: "2rem", mb: "1rem" }}>
                {isDragActive ? (
                    <Typography variant="subtitle2">
                        파일을 여기에 놔주세요...
                    </Typography>
                ) : (
                    <Typography variant="subtitle2">
                        또는 파일을 여기에 놔주세요
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
DropBox.propTypes = {
    handleFiles: PropTypes.func.isRequired,
};
export default DropBox;
