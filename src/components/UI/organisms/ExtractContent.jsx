const { Box } = require("@mui/material");
const { default: ExtractStepper } = require("../molecules/ExtractStepper");

function ExtractContent() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                mt: "30vh",
                mb: "30vh",
            }}
        >
            <ExtractStepper />
        </Box>
    );
}
export default ExtractContent;
