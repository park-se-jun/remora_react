import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Front, About, Extract, Result } from "components/pages";
import { ThemeProvider } from "@mui/material";
import theme from "components/UI/atoms/BasicTheme";
import FileSelectStep from "components/UI/molecules/FileSelectStep";
import SendingStep from "components/UI/molecules/SendingStep";
import SuccessPage from "components/UI/molecules/SuccessPage";
import FailPage from "components/UI/molecules/FailPage";

function Root() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Front />} />
                    <Route path="/front" element={<Front />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/extract" element={<Extract />}>
                        <Route path="" element={<FileSelectStep />} />
                        <Route path="uploading" element={<SendingStep />} />
                        <Route path="uploading/fail" element={<FailPage />} />
                        <Route
                            path="uploading/success"
                            element={<SuccessPage />}
                        />
                    </Route>
                    <Route path="/extract/result" element={<Result />} />
                    {/* <Route path="/test" element={<Test />} />
                    [테스트] 반드시 지워주기 */}
                    <Route
                        path="/*"
                        element={<h1>존재하지 않는 페이지 입니다.</h1>}
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default Root;
