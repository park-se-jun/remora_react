import { Grid, Box } from "@mui/material";
import { PropTypes } from "prop-types";

function PageTemplate({ header, content, footer }) {
    return (
        <Grid container spacing={2}>
            <Grid className="Header" item>
                {header}
            </Grid>
            <Grid className="content" item>
                {content}
            </Grid>
            <Grid className="footer" item>
                {footer}
            </Grid>
        </Grid>
    );
}

PageTemplate.propTypes = {
    header: PropTypes.element,
    content: PropTypes.element,
    footer: PropTypes.element,
};
PageTemplate.defaultProps = {
    header: <Box />,
    content: <Box />,
    footer: <Box />,
};
export default PageTemplate;
