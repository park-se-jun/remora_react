import { Tabs, Tab } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import React from "react";
import { PropTypes } from "prop-types";
// function LinkTab(props) {
//     return <Tab component></Tab>;
// }
const styles = {
    MuiTab: {
        root: {
            backgroundColor: "blue",
            "&$selected": {
                backgroundColor: "red",
            },
        },
    },
};
const CustomTab = withStyles(styles)(Tab);
function RemoraHeader({ index }) {
    const [value, setValue] = React.useState(index);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    return (
        <Tabs value={value} variant="fullWidth" onChange={handleChange}>
            <CustomTab label="Remora" to="/" component={Link} />
            <CustomTab label="about" to="/about" component={Link} />
            <CustomTab
                label="text extract from video"
                to="/extract"
                component={Link}
            />
        </Tabs>
    );
}
RemoraHeader.propTypes = {
    index: PropTypes.number,
};
RemoraHeader.defaultProps = {
    index: 0,
};
export default RemoraHeader;
