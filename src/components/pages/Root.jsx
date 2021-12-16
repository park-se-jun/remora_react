import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Front, About, Extract, Result } from "components/pages";

function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Front />} />
                <Route path="/about" element={<About />} />
                <Route path="/extract" element={<Extract />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Root;
