import { Box } from "@mui/material";
import { useStoreState } from "store/Store";
import { MyFile } from "interfaces/MyTypes";
import FileInfo from "../atoms/FileInfo";

export default function FileList() {
    const { fileList } = useStoreState();
    return (
        <Box
            sx={{
                mt: "1rem",
                mb: "1rem",
                display: "flex",
                overflow: "auto",
                width: 11.5 / 12,
                height: 1,
            }}
        >
            {fileList.map(function callback(file: MyFile) {
                return <FileInfo file={file} />;
            })}
        </Box>
    );
}
