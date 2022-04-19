import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Front, About, Extract, Result } from "components/pages";
import { ThemeProvider } from "@mui/material";
import theme from "components/UI/atoms/BasicTheme";
import FileSelectStep from "components/UI/molecules/FileSelectStep";
import ErrorPage from "components/UI/molecules/ErrorPage";
import SuccessPage from "components/UI/molecules/SuccessPage";
import ResultContextProvider from "store/ResultSotre";

function Root() {
    return (
        <ResultContextProvider>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Front />} />
                        <Route path="/front" element={<Front />} />
                        <Route path="/about" element={<About />} />

                        <Route path="/extract" element={<Extract />}>
                            <Route path="" element={<FileSelectStep />} />
                            <Route path="success" element={<SuccessPage />} />
                            <Route path="error" element={<ErrorPage />} />
                        </Route>
                        <Route path="/extract/result" element={<Result />} />
                        <Route
                            path="/*"
                            element={<h1>존재하지 않는 페이지 입니다.</h1>}
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ResultContextProvider>
    );
}
export default Root;
