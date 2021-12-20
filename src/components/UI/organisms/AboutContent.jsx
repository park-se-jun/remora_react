import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import LinkToExtractButton from "../molecules/LinkToExtractButton";

const src = `# 테스트용 MD 파일 입니다.

---

## 1 테스트 1

-   테스트2
-   테스트3
`;
function AboutContent() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <LinkToExtractButton />
            <Box
                sx={{
                    minWidth: "80%",
                    mt: "10%",
                    mb: "10%",
                }}
            >
                <ReactMarkdown>{src}</ReactMarkdown>
            </Box>
            <LinkToExtractButton />
        </Box>
    );
}
export default AboutContent;
