import { Tabs, Tab, AppBar } from "@mui/material";
// import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import React from "react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled";
// function LinkTab(props) {
//     return <Tab component></Tab>;
// }
// const styles = {
//     MuiTab: {
//         root: {
//             backgroundColor: "blue",
//             "&$selected": {
//                 backgroundColor: "red",
//             },
//         },
//     },
// };
const CustomTab = styled(Tab)`
    babground-color: #e5e5e5;
`;
function RemoraHeader({ index }) {
    const [value, setValue] = React.useState(index);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    return (
        <AppBar>
            <Tabs
                sx={{ bgcolor: "#e5e5e5", minHeight: "60px" }}
                value={value}
                variant="fullWidth"
                onChange={handleChange}
            >
                <CustomTab
                    sx={{ flexGrow: 4 }}
                    label="Remora"
                    to="/"
                    component={Link}
                />
                <CustomTab label="about" to="/about" component={Link} />
                <CustomTab
                    label="text extract from video"
                    to="/extract"
                    component={Link}
                />
            </Tabs>
        </AppBar>
    );
}
RemoraHeader.propTypes = {
    index: PropTypes.number,
};
RemoraHeader.defaultProps = {
    index: 0,
};
export default RemoraHeader;
