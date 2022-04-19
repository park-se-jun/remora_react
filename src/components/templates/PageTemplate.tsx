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
    );
}

export default PageTemplate;
