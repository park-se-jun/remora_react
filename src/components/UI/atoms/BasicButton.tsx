/* eslint-disable react/jsx-props-no-spreading */
import { Button, ButtonProps } from "@mui/material";
import React from "react";

function BasicButton<C extends React.ElementType>(
    props: ButtonProps<C, { component?: C }>,
) {
    return (
        <Button
            disableElevation
            color="secondary"
            variant="contained"
            {...props}
        />
    );
}
export default BasicButton;
