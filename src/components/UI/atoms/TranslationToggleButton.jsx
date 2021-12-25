/* eslint-disable react/jsx-props-no-spreading */
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function TranslationToggleButton({ Translation, ...props }) {
    const [text, setText] = React.useState("번역한다");
    const [color, setColor] = React.useState("primary");
    React.useEffect(() => {
        if (Translation) {
            setText("번역한다");
            setColor("primary");
        } else {
            setText("번역하지 않는다");
            setColor("error");
        }
    });
    return (
        <Button
            sx={{
                width: 138,
                height: 36,
            }}
            color={color}
            variant="contained"
            {...props}
        >
            {text}
        </Button>
    );
}
export default TranslationToggleButton;
TranslationToggleButton.propTypes = {
    Translation: PropTypes.bool.isRequired,
};
