/* eslint-disable react/jsx-props-no-spreading */
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import BasicTheme from "./BasicTheme";

function BasicButton({ text, ...buttonProps }) {
    return (
        <ThemeProvider theme={BasicTheme}>
            <Button color="secondary" variant="contained" {...buttonProps}>
                {text}
            </Button>
        </ThemeProvider>
    );
}
BasicButton.propTypes = {
    text: PropTypes.string.isRequired,
};
export default BasicButton;
