import { createTheme } from "@mui/material/styles";

const BasicTheme = createTheme({
    palette: {
        primary: {
            main: "#6fa8dc",
            contrastText: "#e5e5e5",
        },
        secondary: {
            dark: "#e5e5e5",
            main: "#ffffff",
            contrastText: "#6fa8dc",
        },
        error: {
            main: "#FF7069",
            contrastText: "#e5e5e5",
        },
    },
});
export default BasicTheme;
