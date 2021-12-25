import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Front, About, Extract, Result, Test } from "components/pages";
import { ThemeProvider } from "@mui/material";
import theme from "components/UI/atoms/BasicTheme";

function Root() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Front />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/extract" element={<Extract />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/test" element={<Test />} />
                    {/* [테스트] 반드시 지워주기 */}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default Root;
