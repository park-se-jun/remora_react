import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import BasicTheme from "./BasicTheme";

function BasicButton({ text }) {
    return (
        <ThemeProvider theme={BasicTheme}>
            <Button color="secondary" variant="contained">
                {text}
            </Button>
        </ThemeProvider>
    );
}
BasicButton.propTypes = {
    text: PropTypes.string.isRequired,
};
export default BasicButton;
