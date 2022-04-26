import { Box } from "@mui/material";
import StoreContextProvider from "store/Store";
import TempAdvertiseBanner from "../atoms/TempAdvertiseBanner";
import ExtractStepper from "../molecules/ExtractStepper";

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
            <TempAdvertiseBanner />

            <StoreContextProvider>
                <ExtractStepper />
            </StoreContextProvider>
        </Box>
    );
}
export default ExtractContent;
