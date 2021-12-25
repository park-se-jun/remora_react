/* eslint-disable react/jsx-props-no-spreading */
import { Button } from "@mui/material";
import PropTypes from "prop-types";

function BasicButton({ text, ...buttonProps }) {
    return (
        <Button color="secondary" variant="contained" {...buttonProps}>
            {text}
        </Button>
    );
}
BasicButton.propTypes = {
    text: PropTypes.string.isRequired,
};
export default BasicButton;
