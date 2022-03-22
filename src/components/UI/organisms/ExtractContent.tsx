import { Box } from "@mui/material";
import StoreContextProvider from "store/Store";
import ExtractStepper from "../molecules/ExtractStepper";

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
            <StoreContextProvider>
                <ExtractStepper />
            </StoreContextProvider>
        </Box>
    );
}
export default ExtractContent;
