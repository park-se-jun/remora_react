/* eslint-disable react/jsx-props-no-spreading */
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function TranslationToggleButton({ getTranslation, ...props }) {
    const [translate, setTranslate] = React.useState(true);
    const [text, setText] = React.useState("번역한다");
    const [color, setColor] = React.useState("primary");
    React.useEffect(() => {
        if (translate) {
            setText("번역한다");
            setColor("primary");
        } else {
            setText("번역하지 않는다");
            setColor("error");
        }
        getTranslation(translate);
    });
    return (
        <Button
            sx={{
                width: 138,
                height: 36,
            }}
            color={color}
            variant="contained"
            onClick={() => {
                setTranslate(!translate);
            }}
            {...props}
        >
            {text}
        </Button>
    );
}
export default TranslationToggleButton;
TranslationToggleButton.propTypes = {
    getTranslation: PropTypes.func.isRequired,
};
