import { Grid, Typography } from "@mui/material";
import BasicButton from "components/UI/atoms/BasicButton";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const GridItems = styled(Grid)`
    min-height: 100px;
`;
function FrontContent() {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <GridItems item xs={12} />
            <GridItems item xs={12} />
            <GridItems item xs={3} />
            <GridItems item xs={6}>
                <Typography variant="h6" component="div" align="center">
                    Remora를 이용해서 동영상 속 텍스트를 추출해 보세요!
                </Typography>
            </GridItems>
            <GridItems item xs={3} />
            <GridItems item xs={12} />
            <GridItems item xs={12} />
            <GridItems item xs="auto">
                <BasicButton
                    sx={{ height: 1 }}
                    gridColumn="span 4"
                    text="동영상속 텍스트를 추출하러 가기 ->"
                    to="/extract"
                    size="lg"
                    component={Link}
                />
            </GridItems>
        </Grid>
    );
}
export default FrontContent;
