import { Box, Typography } from "@mui/material";

function TempAdvertiseBanner() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "468px",
                height: "60px",
                backgroundColor: "gray",
                alignItems: "center",
                justifyContent: "center",
                margin: "60px",
            }}
        >
            <Typography variant="h5">광고 테스트용 배너 입니다.</Typography>
        </Box>
    );
}
export default TempAdvertiseBanner;
