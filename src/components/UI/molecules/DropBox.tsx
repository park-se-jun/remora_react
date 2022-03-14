/* eslint-disable react/jsx-props-no-spreading */
import uuidv4 from "modules/Uuid";
import { useTheme } from "@mui/material/styles";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "components/store/Store";
import BasicButton from "../atoms/BasicButton";
import FileList from "./FileList";

function DropBox() {
    const dispatch = useDispatch();
    const theme = useTheme();

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        // accept: "video/*",
        noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            const files = acceptedFiles.map((file: File) =>
                Object.assign(file, { id: uuidv4(), translation: true }),
            );
            dispatch({ type: "ADD_FILE", files });
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
                height: 1,
                padding: "1rem",
                margin: "1rem",
            }}
            {...getRootProps()}
        >
            <input {...getInputProps()} />

            <BasicButton sx={{ mt: "1rem" }} variant="contained" onClick={open}>
                동영상 파일 선택
            </BasicButton>
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
            <FileList />
        </Box>
    );
}
export default DropBox;
