import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import BasicTheme from "./BasicTheme";
// import TranslationTheme from "./TranslationTheme";

function TranslationToggleButton() {
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
    });
    return (
        <ThemeProvider theme={BasicTheme}>
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
            >
                {text}
            </Button>
        </ThemeProvider>
    );
}
export default TranslationToggleButton;
