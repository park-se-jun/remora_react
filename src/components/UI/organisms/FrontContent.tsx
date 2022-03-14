import { Box, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import LinkToExtractButton from "../molecules/LinkToExtractButton";

function FrontContent() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Typography variant="h6" component="div" align="center">
                Remora를 이용해서 동영상 속 텍스트를 추출해 보세요!
            </Typography>

            <LinkToExtractButton />
        </Box>
    );
}
export default FrontContent;
