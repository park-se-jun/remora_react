/* eslint-disable react/jsx-props-no-spreading */
import { Button, ButtonProps } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

interface TranslationToggleButtonProps extends ButtonProps {
    Translation: boolean;
}

type ButtonColor = "primary" | "error";
function TranslationToggleButton({
    Translation,
    ...rest
}: TranslationToggleButtonProps) {
    const [text, setText] = React.useState("번역한다");
    const [color, setColor] = React.useState<ButtonColor>("primary");
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
            {...rest}
        >
            {text}
        </Button>
    );
}
export default TranslationToggleButton;
TranslationToggleButton.propTypes = {
    Translation: PropTypes.bool.isRequired,
};
