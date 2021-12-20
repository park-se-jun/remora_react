import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import BasicButton from "../atoms/BasicButton";

function LinkToExtractButton() {
    return (
        <Box sx={{ pt: "30%", pb: "30%" }}>
            <BasicButton
                sx={{
                    bgcolor: "secondary.dark",
                    height: 1,
                    p: 3,
                    borderRadius: 4,
                    fontWeight: "fontWeightBold",
                    maxWeight: "300px",
                    minWeight: "300px",
                }}
                text="동영상속 텍스트를 추출하러 가기 ->"
                to="/extract"
                size="lg"
                component={Link}
            />
        </Box>
    );
}
export default LinkToExtractButton;
