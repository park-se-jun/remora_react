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
            }}
        >
            <ExtractStepper />
        </Box>
    );
}
export default ExtractContent;
