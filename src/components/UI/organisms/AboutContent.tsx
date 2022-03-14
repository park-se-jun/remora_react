import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import LinkToExtractButton from "../molecules/LinkToExtractButton";

const src = `# Remora

---

##  What is Remora?

### Remora는 동영상 속 텍스트를 추출하여 동영상이 어떤 내용을 포함하고 있는지 키워드와 글을 제공하는 서비스입니다.
### Remora를 통해 동영상을 전부 시청하지 않고도 동영상의 내용을 파악할 수 있습니다.

## HowTo
### 1. 하단의 동영상 속 텍스트 추출하러 가기 버튼을 클릭한다.
### 2. 추출을 원하는 동영상을 업로드한다.
### 3. 번역 여부를 선택한다.
### 4. 결과를 확인한다.
`;

function AboutContent() {
    const markdownStyle = {
        Width: "80%",
        minHeight: "1000px",
        mt: "50vh",
        mb: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    } as const;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: "50vh",
                mb: "50vh",
            }}
        >
            <LinkToExtractButton />
            <Box sx={markdownStyle}>
                <ReactMarkdown>{src}</ReactMarkdown>
            </Box>
            <LinkToExtractButton />
        </Box>
    );
}
export default AboutContent;
