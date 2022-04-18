import { Box, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";

interface MyProgressProps {
    value: number;
}
function MyProgress({ value }: MyProgressProps) {
    return (
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
                <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={value}
                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{` ${
                    value / 20
                }/5`}</Typography>
            </Box>
        </Box>
    );
}
export default MyProgress;

MyProgress.propTypes = {
    value: PropTypes.number,
};
MyProgress.defaultProps = {
    value: 0,
};
