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
                pt: "10%",
                mt: "10%",
            }}
        >
            <ExtractStepper />
        </Box>
    );
}
export default ExtractContent;
