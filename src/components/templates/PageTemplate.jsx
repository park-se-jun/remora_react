import { Box } from "@mui/material";
import { PropTypes } from "prop-types";

function PageTemplate({ header, content, footer }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
            }}
        >
            {header}
            {content}
            {footer}
        </Box>
        // <Grid container spacing={2}>
        //     <Grid className="Header" item xs={12}>
        //         {header}
        //     </Grid>
        //     <Grid className="content" item xs={12}>
        //         {content}
        //     </Grid>
        //     <Grid className="footer" item xs={12}>
        //         {footer}
        //     </Grid>
        // </Grid>
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
