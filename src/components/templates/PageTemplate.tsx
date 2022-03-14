import { Box } from "@mui/material";

interface PageTemplateProps {
    header: JSX.Element;
    content: JSX.Element;
    footer: JSX.Element;
}

function PageTemplate({ header, content, footer }: PageTemplateProps) {
    return (
        <>
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
        </>

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

export default PageTemplate;
