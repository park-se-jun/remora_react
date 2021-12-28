import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";
import DropBox from "./DropBox";

export default function FileSelectStep({ getFileArray }) {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
            wrap="wrap"
        >
            <Grid item xs="auto">
                <Typography variant="h6">
                    텍스트를 추출할 영상을 선택해 주세요
                </Typography>
            </Grid>
            <Grid item xs={12} />
            <Grid item xs="11.5">
                <DropBox handleFiles={getFileArray} />
            </Grid>
        </Grid>
    );
}
FileSelectStep.propTypes = {
    getFileArray: PropTypes.func.isRequired,
};
