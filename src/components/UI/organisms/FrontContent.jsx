import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import LinkToExtractButton from "../molecules/LinkToExtractButton";

const GridItems = styled(Grid)`
    min-height: 100px;
`;
function FrontContent() {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <GridItems item xs={12} />
            <GridItems item xs={12} />
            <GridItems item xs="auto">
                <Typography variant="h6" component="div" align="center">
                    Remora를 이용해서 동영상 속 텍스트를 추출해 보세요!
                </Typography>
            </GridItems>
            <GridItems item xs={12} />
            <GridItems item xs={12} />
            <GridItems item xs="auto">
                <LinkToExtractButton />
            </GridItems>
        </Grid>
    );
}
export default FrontContent;
