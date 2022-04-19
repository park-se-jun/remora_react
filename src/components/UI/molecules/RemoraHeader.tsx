import { Tabs, Tab, AppBar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

function RemoraHeader({ index }) {
    const [value, setValue] = React.useState(index);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    return (
        <>
            <Box minHeight="60px" />
            <AppBar>
                <Tabs
                    sx={{ bgcolor: "#e5e5e5", minHeight: "60px" }}
                    value={value}
                    variant="fullWidth"
                    onChange={handleChange}
                >
                    <Tab
                        sx={{ flexGrow: 4 }}
                        label="Remora"
                        to="/"
                        component={Link}
                    />
                    <Tab label="about" to="/about" component={Link} />
                    <Tab
                        label="text extract from video"
                        to="/extract"
                        component={Link}
                    />
                </Tabs>
            </AppBar>
        </>
    );
}
RemoraHeader.propTypes = {
    index: PropTypes.number,
};
RemoraHeader.defaultProps = {
    index: 0,
};
export default RemoraHeader;
