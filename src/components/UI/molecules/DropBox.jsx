/* eslint-disable react/jsx-props-no-spreading */
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box } from "@mui/material";
function DropBox() {
    const onDrap = useCallback(acceptedFiles => {}, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });~
    return (
        <Box {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag n drop some files here, or click to select files</p>
            )}
        </Box>
    );
}
export default DropBox;
