import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/styles";

import BasicTheme from "./BasicTheme";

function BasicButton({ text }) {
    return (
        <ThemeProvider theme={BasicTheme}>
            <Button color="primary" variant="contained">
                {text}
            </Button>
        </ThemeProvider>
    );
}
BasicButton.propTypes = {
    text: PropTypes.string.isRequired,
};
export default BasicButton;
